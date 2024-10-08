import Image from "next/image";
import Link from "next/link";
import idImg from "../img/QualID.svg"
import { User } from "./user";

export function Header(){
    return (
        <div className="py-4 bg-main-dark">
            <div className="container mx-auto justify-between flex items-center">
                <Link href="/" className="mx-2">
                    <h1 className="filter flex items-center">
                        <Image src={idImg} width="100" alt="QualID Logo" className="drop-shadow"/>
                    </h1>
                </Link>
                <div className="flex gap-2 mx-2">
                    <User/>
                </div>
            </div>
        </div>
    )
}