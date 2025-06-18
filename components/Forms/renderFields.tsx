import InputField from "../input/InputField";
import type { FormState } from "./types";

export const renderFields = (
    form: FormState,
    handleChange: (field: keyof FormState)=>(e: React.ChangeEvent<HTMLInputElement>) => void,
    mode: "login"|"register"
)=> (
    <>
    {mode === "register" &&(
        <div className="mb-4">
            <InputField
            type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange("name")} 
          />
        </div>
    )}
    <div className="mb-4">
         <InputField
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange("email")}
        />
    </div>
    <div className="mb-4">
         <InputField
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange("password")}
        required
      />
    </div>
    {mode === "register" &&(
         <div className="mb-4">
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
        />
      </div>
    )}
    </>
);