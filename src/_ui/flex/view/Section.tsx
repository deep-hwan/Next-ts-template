/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';
import { ViewType } from '../_utils/types';
import { V } from '../V';

type Types = { children?: ReactNode } & HTMLAttributes<HTMLDivElement> & Omit<ViewType, 'direction'>;

const Section = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <V.Column as='section' flex={1} align='center' ref={ref} {...props}>
      {props.children}
    </V.Column>
  );
});

export { Section };
