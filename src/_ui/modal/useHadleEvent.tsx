import { ForwardedRef, useCallback, useEffect } from 'react';

type RefType = ForwardedRef<HTMLDivElement>;

export default function useHandleEvent({
  ref,
  open,
  onCancel,
  clickOutSideClose,
  windowScreenScroll,
}: {
  ref: RefType;
  open: boolean;
  onCancel: () => void;
  clickOutSideClose?: boolean;
  windowScreenScroll?: boolean;
}) {
  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (
        clickOutSideClose &&
        open &&
        ref &&
        'current' in ref &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        onCancel();
      }
    },
    [open, onCancel]
  );

  useEffect(() => {
    if (!windowScreenScroll) {
      if (open) {
        const scrollY = window.scrollY;

        document.body.style.top = `-${scrollY}px`;
        document.body.style.overflowY = 'hidden';
      } else {
        const scrollY = document.body.style.top;

        document.body.style.top = '';
        document.body.style.overflowY = 'auto';

        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    } else return;
  }, [open, windowScreenScroll]);

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [clickModalOutside]);

  return null;
}
