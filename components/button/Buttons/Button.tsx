'use client';

import React from 'react';
import { ButtonVariant } from '@/types/buttons/ButtonProps';
import LinkButton from './LinkButton';
import ProfileButton from './ProfileButton';
import ReturnButton from './ReturnButton';

interface ButtonProps {
  variant: ButtonVariant;
  name?: string;
  to: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {variant} = props;

  switch (variant) {
    case 'return':
      return <ReturnButton />
    case 'profile':
      return  <ProfileButton variant={variant} onClick={props.onClick}>{props.children}</ProfileButton>;
      default:
      return  <LinkButton to={props.to!} name={props.name!} variant={variant} />;
  }
};

export default Button;
