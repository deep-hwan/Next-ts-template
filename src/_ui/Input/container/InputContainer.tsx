/** @jsxImportSource @emotion/react */
import { Skeleton, Txt, V } from '@/_ui';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

function InputContainerComponent({
  id,
  children,
  label,
  labelSize,
  labelColor,
  minWidth,
  maxWidth,
  error,
  tolTip,
  important,
  ...props
}: InputTypes & { children: ReactNode; id: string | number; error: ErrorType; tolTip: TolTipType }) {
  const LabelColor = () => {
    if (error?.error) return error?.messageColor ?? '#FF6767';
    return labelColor ?? '#888';
  };

  return (
    <V.Column align='start' minWidth={minWidth} maxWidth={maxWidth} {...props}>
      {label && (
        <label
          htmlFor={id}
          css={{
            color: LabelColor(),
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            fontSize: labelSize ?? '0.813rem',
            marginBottom: '5px',

            '&:focus-within': { fontWeight: 500 },
          }}
        >
          {label}

          {!!important && <span css={{ fontSize: 11, color: '#fa7979', fontWeight: 500 }}>{important ?? '*'}</span>}
        </label>
      )}

      {children}

      {error?.error && (
        <Txt color={error?.messageColor ?? '#FF6767'} size={(error?.messageSize as any) ?? 13} margin={{ top: 5 }}>
          {error?.message}
        </Txt>
      )}

      {!!tolTip?.description && !error?.error && (
        <Txt color={tolTip?.color ?? '#939EAB'} size={(tolTip?.size as any) ?? 13} margin={{ top: 5 }}>
          {tolTip?.description}
        </Txt>
      )}
    </V.Column>
  );
}

const InputContainer = dynamic(() => Promise.resolve(InputContainerComponent), {
  ssr: false,
  loading: () => <Skeleton height={48} borderRadius={14} />,
});

export default InputContainer;
