import { InputHTMLAttributes, ReactNode } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  label?: string;
  icon?: ReactNode;
  ref?: any;
}
