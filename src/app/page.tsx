import singleImg from "./img/single.svg"
import safeImg from "./img/safe.svg"
import ecosystemImg from "./img/ecosystem.svg"
import teamImg from "./img/team.svg"
import { Card } from "./component/card";
import { Main } from "./component/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qual ID",
  description: "Единый аккаунт для всех",
};

export default function Home() {
  return (
    <>
      <Main />

      <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[2600ms]">
        <Card name="Синхронизация" description="Данные всех сервисов объеденены и связаны со всеми устройствами одним аккаунтом" img={singleImg}/>
      </div>

      <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[2800ms]">
        <Card name="Безопасность" description={"Все ваши данные находятся под надежной защитой от Clerk и не попадут 3-им   лицам"} img={safeImg}/>
      </div>

      <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[3000ms]">
        <Card name="Единство" description="Наши продукты(Kenycloud, shortul, notter и т.д) имеют общую систему аккаунтов QualID" img={ecosystemImg}/>
      </div>

      <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[3200ms]">
        <Card name="Командная работа" description="Для удобной командой работы Clerk предоставляет систему организаций с синхронизацией" img={teamImg} org/>
      </div>
    </>
  );
}
