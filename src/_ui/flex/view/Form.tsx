/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';
import { ViewType } from '../_utils/types';
import { V } from '../V';

type Types = { children?: ReactNode } & ViewType & HTMLAttributes<HTMLFormElement>;

const Form = forwardRef(({ direction = 'column', children, ...props }: Types, ref: ForwardedRef<HTMLFormElement>) => {
  return (
    <>
      {direction === 'column' && (
        <V.Column as='form' ref={ref} {...props}>
          {children}
        </V.Column>
      )}

      {direction === 'row' && (
        <V.Row as='form' ref={ref} {...props}>
          {children}
        </V.Row>
      )}
    </>
  );
});

export { Form };
