import { InputHTMLAttributes } from "react";

interface InputProps extends 
    InputHTMLAttributes<HTMLInputElement>{}

export function Input( { ...rest } : InputProps ){
    return (
        <div className="w-full p-2 border-none outline-none rounded-md"
            { ...rest } >
            <div>x</div>
            <input className="flex-1"/>
        </div>
    )
}