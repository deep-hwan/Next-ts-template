import React, { OptionHTMLAttributes, ReactNode } from 'react';

interface Props extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
}

export function Option({ children, ...rest }: Props) {
  return <option {...rest}>{children}</option>;
}
