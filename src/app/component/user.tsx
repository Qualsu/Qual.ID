import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function User(){
    return (
        <>
            <UserButton/>
            <SignedOut>
                <SignInButton>
                    <a className="text-white hover:cursor-pointer hover:text-gray-300 active:font-xs" href="/auth/sign-in">Войти</a>
                </SignInButton>
            </SignedOut>
        </>
    )
}