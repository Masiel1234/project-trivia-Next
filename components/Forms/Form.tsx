'use client'
import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import type { FormProps , FormState} from "./types";
import { validateForm } from "@/utils/validateForm"
import { renderFields } from "./renderFields";
import { buildFormData } from "@/utils/buildFormData";

const ErrorMessage = ({error}:{error: string})=> error? <p className="text-red-500 text-sm mb-2" >{error}</p> :null;
export const Form: React.FC<FormProps> = ({mode, onSubmit}) =>{
const[form,setForm] = useState<FormState>({
    email: "",
    password:"",
    name:"",
    confirmPassword: "",
});

const [error,setError] = useState("");

const handleChange =(field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form,[field]: e.target.value});

const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    const errorMsg = validateForm(form, mode);
    if(errorMsg) return setError(errorMsg);
    setError("");
    onSubmit(buildFormData(form,mode))
};

return(

    <div className="w-full max-w-xs">
        
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Button name="" variant="return" to="/"/>
        <h2 className="text-2xl font-semibold mb-4 text-center">
        {mode === 'login' ? 'login' : 'Sign up'}
        </h2>
        {renderFields(form,handleChange,mode)}
        <ErrorMessage error={error}/>
        <button className="bg-pink-400 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {mode === 'login' ? 'Enter' : 'Sign up'}
        </button>
    </form>
</div>
)
}




