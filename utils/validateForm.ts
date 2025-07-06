import type { FormState } from "../components/Forms/types";

export const validateForm = (form: FormState, mode: "login" | "register") => {
    if(mode === "register"){
        if(!form.name) return "obligatorio";
        if(form.password !== form.confirmPassword) return "contraseñas no coinciden"
    }
}