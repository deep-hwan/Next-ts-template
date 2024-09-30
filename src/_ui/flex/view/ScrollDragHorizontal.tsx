/** @jsxImportSource @emotion/react */
import React, { useRef, useState, useCallback, MouseEvent, TouchEvent, HTMLAttributes, ReactNode } from 'react';

type Types = {
  children: ReactNode;
  maxWidth?: number;
  gap?: number;
  scrollBarActive?: boolean;
  snap?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const ScrollDragHorizontal = ({ children, maxWidth, gap, scrollBarActive = false, snap = false, ...props }: Types) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const startDrag = useCallback((e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    const targetTag = (e.target as HTMLElement).tagName.toLowerCase();
    if (['input', 'select', 'textarea', 'button'].includes(targetTag)) {
      return;
    }

    const clientX = e.type.includes('touch') ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    setIsDragging(true);
    setStartX(clientX);
    setScrollLeft(ref.current?.scrollLeft || 0);
    e.preventDefault();
  }, []);

  const doDrag = useCallback(
    (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;

      const clientX = e.type.includes('touch') ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
      const walk = (clientX - startX) * 1.5; // Increase sensitivity
      if (ref.current) {
        requestAnimationFrame(() => {
          ref.current!.scrollLeft = scrollLeft - walk;
        });
      }
    },
    [isDragging, startX, scrollLeft]
  );

  const endDrag = useCallback(() => {
    setIsDragging(false);
    if (snap && ref.current) {
      const elements = Array.from(ref.current.children) as HTMLElement[];
      const closestElement = elements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = box.left - ref.current!.getBoundingClientRect().left;
          if (Math.abs(offset) < 50) {
            return { offset, element: child };
          }
          return closest;
        },
        {
          offset: Number.POSITIVE_INFINITY,
          element: null as HTMLElement | null,
        }
      );

      if (closestElement.element) {
        closestElement.element.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
    }
  }, [snap]);

  return (
    <div
      ref={ref}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      onMouseMove={isDragging ? doDrag : undefined}
      onTouchMove={isDragging ? doDrag : undefined}
      onMouseLeave={endDrag}
      onMouseUp={endDrag}
      onTouchEnd={endDrag}
      css={{
        width: '100%',
        maxWidth: `${maxWidth}px`,
        columnGap: `${gap}px`,
        display: 'flex',
        overflowX: 'auto',
        cursor: isDragging ? 'grabbing' : 'grab',
        padding: '1px 0',
        userSelect: 'none',
        scrollSnapType: isDragging || !snap ? 'none' : 'x mandatory',
        transition: 'scroll 0.3s ease-in-out',
        '& > *': {
          scrollSnapAlign: 'start',
        },
        '&::-webkit-scrollbar': {
          display: scrollBarActive ? 'flex' : 'none',
        },
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollDragHorizontal;
