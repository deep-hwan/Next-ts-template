/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactNode } from 'react';
import { ViewType } from '../_utils/types';
import { V } from '../V';

//
type Types = { children: ReactNode } & ViewType & HTMLAttributes<HTMLUListElement> & HTMLAttributes<HTMLDListElement>;

export function Items({ direction = 'column', children, ...props }: Types) {
  return (
    <>
      {direction === 'column' && (
        <V.Column as='ul' {...props}>
          {children}
        </V.Column>
      )}
      {direction === 'row' && (
        <V.Row as='ul' {...props}>
          {children}
        </V.Row>
      )}
    </>
  );
}

export function Item({ direction = 'column', children, as = 'li', ...props }: Types & { as?: 'li' | 'ol' }) {
  return (
    <>
      {direction === 'column' && (
        <V.Column as={as ?? 'li'} width={props.width ?? 'auto'} {...props}>
          {children}
        </V.Column>
      )}
      {direction === 'row' && (
        <V.Row as={as ?? 'li'} width={props.width ?? 'auto'} {...props}>
          {children}
        </V.Row>
      )}
    </>
  );
}
