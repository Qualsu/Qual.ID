import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function User(){
    return (
        <>
            <UserButton/>
            <SignedOut>
                <SignInButton>
                    <p className="text-white hover:cursor-pointer hover:text-gray-300 active:font-xs">Войти</p>
                </SignInButton>
            </SignedOut>
        </>
    )
}