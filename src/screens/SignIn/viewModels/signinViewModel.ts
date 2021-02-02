import { useRef, useState, FormEvent } from "react";

const useSignInViewModel = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const formControl = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        console.log(`Email: ${emailRef.current.value}`);
        console.log(`Pass: ${passwordRef.current.value}`);
    }

    return { emailRef, passwordRef, isLoading, setIsLoading, formControl };
};

export default useSignInViewModel;
