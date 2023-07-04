import Link from "next/link";
import { FaHome, FaExclamation, FaMobile, FaPortrait } from "react-icons/fa";
export default function Menu() {
  return (
    <>
      <ul
        className="
      flex 
      flex-initial 
      w-16 
      flex-col 
      justify-items-center 
      items-center 
      space-y-2 
      dark:text-gray-400"
      >
        <li
          className="
        m-10  
        p-4 
        border 
        rounded-md  
        hover:bg-yellow-500 
        hover:text-gray-700
        hover:border-yellow-500
        hover:rounded-md
        hover:cursor-pointer 
        text-xl 
        "
          title="Home"
        >
          <Link href="/dashboard">
            <FaHome />
          </Link>
        </li>
        <li
          className="
        p-4 
        border 
        rounded-md 
        hover:bg-yellow-500 
        hover:text-gray-700
        hover:border-yellow-500
        hover:rounded-md
        hover:cursor-pointer
        text-xl"
          title="Sobre"
        >
          <Link href="/about">
            <FaExclamation />
          </Link>
        </li>
        <li
          title="Contato"
          className="
           p-4 
           border 
           rounded-md 
           hover:bg-yellow-500 
           hover:text-gray-700
           hover:border-yellow-500 
           hover:rounded-md
           hover:cursor-pointer
           text-xl"
        >
          <Link href="/contact">
            <FaMobile />
          </Link>
        </li>
        <li
          className="
        p-4 
        border 
        rounded-md 
        hover:bg-yellow-500 
        hover:text-gray-700
        hover:border-yellow-500 
        hover:rounded-md
        hover:cursor-pointer
        text-lg"
          title="Usuários"
        >
          <Link href="/users">
            <FaPortrait />
          </Link>
        </li>
      </ul>
    </>
  );
}
