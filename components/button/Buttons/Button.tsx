"use client";

import { ButtonVariant } from "../../../types/buttons/ButtonProps";
import LinkButton from "./LinkButton";
import ButtonCurrency from "../ButtonCurrency";
import ProfileButton from "./ProfileButton";
import ReturnButton from "./ReturnButton";


interface ButtonProps {
  variant: ButtonVariant;
  name?: string;
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant } = props;

  switch (variant) {
    case "return":
      return <ReturnButton />;
    case "profile":
      return (
        <ProfileButton to={props.to!} variant={variant} onClick={props.onClick}>
          {props.children}
        </ProfileButton>
      );
    case "currency":
      return (
        <ButtonCurrency
          to="/home/currency"
          variant={variant}
        >{props.children}</ButtonCurrency>
      );
    default:
       return <LinkButton to={props.to!} name={props.name!} variant={variant} />;
  }
 
};

export default Button;
