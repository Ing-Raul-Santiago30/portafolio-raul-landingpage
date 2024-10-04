import Coverparticule from "@/components/cover-particule";
import Introductions from "@/components/introductions";
import TransitionPage from "@/components/transition-page";


export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className=" flex  min-h-[100v] h-full bg-no-repeat bg-gradient-cover">
        <Coverparticule/>
        <Introductions/>

      </div>
    </main>
  );
}
