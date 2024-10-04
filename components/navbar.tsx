"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import MotionTransition from "./transition-component";

export default function Navbar() {
  const router = usePathname(); // la ruta en la que estamos
  return (
    <div className=" fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
     
      <nav>
        <MotionTransition position= "right"className=" flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-gray-800 backdrop-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={
                `px-3 py-2 transition duration-150
                 rounded-full cursor-pointer hover:bg-secondary
                 ${router === item.link && "bg-secondary"
              }`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </MotionTransition>
      </nav>
    </div>
  );
}
