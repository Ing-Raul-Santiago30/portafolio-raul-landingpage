import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <CircleImage />
      <TransitionPage />
      <AvatarServices />

      <div className="flex justify-center items-center h-screen mt-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl text-black font-bold mb-6 text-center">Contacto</h2>
          <form action='/'>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Escribe tu nombre"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                placeholder="Escribe tu correo"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-black"
                required
             />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Escribe el asunto"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary text-black"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Escribe tu mensaje"
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:border-secondary text-black"
                required
             />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-secondary text-white font-bold py-3 px-4 rounded-lg hover:bg-secondary-dark transition duration-300" 
              ><Link href='/'>Enviar</Link>
                 
              
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
