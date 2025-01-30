import { InputHTMLAttributes } from "react";

interface InputProps extends 
    InputHTMLAttributes<HTMLInputElement>{
        className: string
    }

export function Input( { className, ...rest } : InputProps ){
    return (
        <input className={`w-full p-2 border-none outline-none 
            rounded-md bg-green-100 text-black 
            font-semibold ${className}`}
            { ...rest }
        />
    )
}