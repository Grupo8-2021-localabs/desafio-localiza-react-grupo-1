import { InputHTMLAttributes, ReactNode } from 'react';
import { UseFormMethods } from 'react-hook-form';

export type IProps = {
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label?: string;
  error?: string;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<UseFormMethods, 'register'>;
