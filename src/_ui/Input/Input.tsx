/** @jsxImportSource @emotion/react */
import React, { Children, cloneElement, useId } from 'react';

import { TextField } from './TextField';
import { Textarea } from './Textarea';
import { PhoneNumberField } from './PhoneNumberField';
import { NumbericField } from './NumbericField';
import { SearchField } from './SearchField';
import { InputContainer } from './container/InputContainer';

export function Input({ label, labelSize, labelColor, minWidth, maxWidth, important, ...props }: InputTypes) {
  const child = Children.only(props.children);

  const { error, tolTip } = child?.props ?? {};

  const id = child.props.id ?? useId();

  return (
    <InputContainer
      id={id}
      label={label}
      labelColor={labelColor}
      labelSize={labelSize}
      maxWidth={maxWidth}
      minWidth={minWidth}
      error={error}
      tolTip={tolTip}
      {...props}
    >
      {cloneElement(child, { id, ...child.props })}
    </InputContainer>
  );
}

Input.TextField = TextField;
Input.Textarea = Textarea;
Input.PhoneNumberField = PhoneNumberField;
Input.NumbericField = NumbericField;
Input.SearchField = SearchField;
