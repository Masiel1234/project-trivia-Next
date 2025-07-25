import type { FormState } from "../types/froms_types";

export const validateForm = (form: FormState, mode: "login" | "register") => {
    if(mode === "register"){
        if(!form.name) return "obligatorio";
        if(form.password !== form.confirmPassword) return "contraseñas no coinciden"
    }
}