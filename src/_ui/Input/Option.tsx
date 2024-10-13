import dynamic from 'next/dynamic';
import { OptionHTMLAttributes, ReactNode } from 'react';

interface Props extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
}

const OptionComponent = ({ children, ...rest }: Props) => {
  return <option {...rest}>{children}</option>;
};

const Option = dynamic(() => Promise.resolve(OptionComponent), { ssr: false, loading: () => <p>...loading</p> });

export default Option;
