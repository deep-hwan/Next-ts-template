import { useUid } from '@/libs/hooks';
import dynamic from 'next/dynamic';
import React, { ForwardedRef, forwardRef, useCallback, useState } from 'react';
import { Skeleton } from '../loading/Skeleton';
import FieldContainer from './container/FieldContainer';

const TextFieldComponent = forwardRef((props: FieldType, ref: ForwardedRef<HTMLInputElement>) => {
  const { disabled = false, numberType = 'int', tab, value, error, edge, sizes, themes, ...rest } = props;
  const id = props?.id ?? useUid();

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = useCallback(() => setIsFocused(true), [isFocused]);
  const handleBlur = useCallback(() => setIsFocused(false), [isFocused]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type === 'number') {
      let { value } = event.target;

      if (numberType === 'int') {
        const newValue = value.replace(/[^0-9]/g, '');
        if (props.maxLength && newValue.length > props.maxLength)
          event.target.value = newValue.slice(0, props.maxLength);
        else event.target.value = newValue;
      } else if (numberType === 'double') {
        // Handle double type if needed
      }
    }

    props.onChange?.(event);
  };

  return (
    <FieldContainer
      edge={edge}
      tab={tab}
      sizes={sizes}
      themes={themes}
      events={{ error, disabled }}
      tabId={`${id}-button`}
    >
      <input
        id={id}
        ref={ref}
        value={value}
        onChange={handleInput}
        onKeyPress={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (!value || (typeof value === 'string' && value.trim() === '')) e.preventDefault();
          }
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            document.getElementById(`${id}-button`)?.click();
          }
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        {...rest}
      />
    </FieldContainer>
  );
});

const TextField = dynamic(() => Promise.resolve(TextFieldComponent), {
  ssr: false,
  loading: () => <Skeleton height={48} borderRadius={14} />,
});

export default TextField;
