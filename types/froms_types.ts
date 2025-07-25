export type Mode = "login" | "register";
export type FormState = {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
};
export type FormProps = {
    mode: Mode;
    onSubmit: (data:{email: string;password: string;name?: string;confirmPassword?: string;}) => void;
};