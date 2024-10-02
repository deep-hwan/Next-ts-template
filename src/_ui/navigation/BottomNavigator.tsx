/** @jsxImportSource @emotion/react */
import React, {
  Children,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
  RefAttributes,
  useRef,
  useState,
} from 'react';

import { P, TouchableOpacity, TxtSpan, V } from '@/_ui';
import { colors, MQ } from '@/libs/themes';
import { css } from '@emotion/react';
import Link from 'next/link';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxWidth?: number;
}

interface MenuProps extends HTMLAttributes<HTMLLinkElement> {
  children: ReactElement;
  href: string;
  label?: string;
  bedge?: boolean;
}

interface BottomNavigatorComponent extends ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>> {
  Tab: React.FC<MenuProps>;
}

export const BottomNavigator: BottomNavigatorComponent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  let childrenArray = React.Children.toArray(props.children);

  childrenArray = childrenArray.filter(child => true);

  if (childrenArray.length < 7) {
    return (
      <P.BottomFixed backgroundColor='#fff' padding={{ horizontal: 8 }} border={{ solid: 1, color: '#eee' }}>
        <ScrollDragHorizontal>
          <V.Column padding={{ top: 2 }} align='center' crossAlign='center' ref={ref}>
            <div
              css={{
                maxWidth: `${props.maxWidth ?? 600}px`,
                width: '100%',
                height: '100%',
                zIndex: '8999',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: '0.3s ease-in-out',
                gap: 2,
              }}
            >
              {childrenArray}
            </div>
          </V.Column>
        </ScrollDragHorizontal>
      </P.BottomFixed>
    );
  }

  return null;
}) as typeof BottomNavigator;

//
//
const Tab: React.FC<MenuProps> = forwardRef<HTMLAnchorElement, MenuProps>(
  ({ children, href, label, bedge, ...props }, ref) => {
    const child = Children.only(children);
    return (
      <Link ref={ref} href={href} passHref>
        <TouchableOpacity
          gap={3}
          direction='column'
          align='center'
          crossAlign='center'
          borderRadius={14}
          minWidth={50}
          maxWidth={50}
          minHeight={55}
          maxHeight={55}
        >
          <V.Column
            width='auto'
            maxHeight={26}
            minHeight={26}
            align='center'
            crossAlign='center'
            css={[
              css`
                svg,
                img {
                  width: 100%;
                  height: 26px;

                  @media (max-width: 600px) {
                    height: 23px;
                  }
                }
              `,
              { [MQ[3]]: { maxHeight: '23px', minHeight: '23px' } },
            ]}
          >
            {child}

            {bedge && (
              <P.Absolute
                position={{ top: 0, right: 6 }}
                width='auto'
                minWidth={6}
                minHeight={6}
                borderRadius={100}
                backgroundColor={colors.red as any}
              >
                {''}
              </P.Absolute>
            )}
          </V.Column>

          <TxtSpan size={12} css={{ [MQ[3]]: { fontSize: '0.68rem' } }} {...props}>
            {label}
          </TxtSpan>
        </TouchableOpacity>
      </Link>
    );
  }
);

//
//
(BottomNavigator as BottomNavigatorComponent).Tab = Tab;

//
//
const ScrollDragHorizontal = ({ children }: { children: ReactNode }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const startDrag = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (ref.current?.offsetLeft || 0));
    setScrollLeft(ref.current?.scrollLeft || 0);
  };

  const doDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (ref.current?.offsetLeft || 0);
    const walk = x - startX;
    if (ref.current) {
      ref.current.scrollLeft = scrollLeft - walk;
    }
  };

  const endDrag = () => setIsDragging(false);

  return (
    <div
      ref={ref}
      onMouseDown={startDrag}
      onMouseLeave={endDrag}
      onMouseUp={endDrag}
      onMouseMove={doDrag}
      css={{
        width: '100%',
        display: 'flex',
        overflowX: 'auto',
        cursor: isDragging ? 'grabbing' : 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {children}
    </div>
  );
};
