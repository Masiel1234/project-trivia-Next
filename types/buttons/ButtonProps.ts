
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "third"
  | "return"
  | "profile"
  | "currency";

export interface BaseProps {
  variant: ButtonVariant;
}
export interface LinkButtonProps extends BaseProps {
  to: string;
  name: string;
}
export interface ProfileButtonProps extends BaseProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export interface CurrencyButtonProps extends BaseProps {
  to: string;
  children: React.ReactNode;
}
