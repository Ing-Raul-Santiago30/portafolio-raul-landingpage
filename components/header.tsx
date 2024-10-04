import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";


export default function Header() {
  return (
    <MotionTransition position="bottom" className="  font-bold absolute z-40 inline-block w-full top-5 md:top-10 px-5">
        <header>
            <div className=" container  justify-between mx-w-6xl mx-auto md:flex">
                <Link href="/" className=" text-4xl">
                <h1 className="my-3 text-3xl font-bold text-center md:text-left">
                Raúl Santiago 
                <span className=" text-secondary">
                Dev
                </span>
                </h1>
                
               
                </Link>
              
  
                <div className=" flex items-center justify-center gap-7 ">
                    {socialNetworks.map(({logo, src, id})=>(
                       <Link key={id}
                       href={src}
                       target="_blank"
                       className="transition-all duration-300  hover:text-secondary"
                       >
                       {logo}
                       </Link> 
                    ))}

                </div>

            </div>
        </header>
    </MotionTransition>
  )
}
