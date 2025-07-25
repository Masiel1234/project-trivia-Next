import type { FormState } from "../types/froms_types";

export const buildFormData = (
    form: FormState,
    mode: "login" | "register"
)=>{
    const { email,password, name , confirmPassword}= form;
    return mode === "register"?{email,password,name, confirmPassword}:{email,password};
};