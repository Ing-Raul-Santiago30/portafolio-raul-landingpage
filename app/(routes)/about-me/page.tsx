import Avatar from "@/components/Avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

export default function PageAboutMe() {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className=" text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Toda mi{" "}
          <span className=" font-bold text-secondary">
            Trayectoria Profesional
          </span>
        </h1>

        {/*contador de servicio */}
        <CounterServices/>

        <TimeLine/>
        
      </ContainerPage>
    </>
  );
}
