import Link from "next/link";
import { FaBell, FaUser, FaBox, FaOpencart } from "react-icons/fa";
export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="ml-2">
        <FaOpencart className="text-5xl text-yellow-600 border rounded-full border-yellow-600" />
      </div>
      <div>
        <nav>
          <ul className="flex flex-row items-center gap-6 p-2">
            <li>
              <Link href="/dashboard">
                <FaBox />
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <FaBell />
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <FaUser />
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <i>meuemail@email.com</i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
