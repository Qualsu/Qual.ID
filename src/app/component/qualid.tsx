import { OrganizationSwitcher } from "@clerk/nextjs";
import { User } from "./user";

export function QualID(){
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl text-white">Перейти в личный кабинет: <User/></h1>
            
            <OrganizationSwitcher/>
        </div>
    )
}