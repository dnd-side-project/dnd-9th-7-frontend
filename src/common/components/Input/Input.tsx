import type { ForwardedRef, InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line react/require-default-props
  endComponents?: ReactNode;
}

export const Input = forwardRef(function Input(props: Props, ref: ForwardedRef<HTMLInputElement>) {
  const { endComponents, ...rest } = props;

  return (
    <>
      <input {...rest} ref={ref} style={{ all: 'unset' }} />
      {endComponents}
    </>
  );
});
