import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[80%] max-w-[60rem] mx-auto mt-8 mb-0 flex justify-between items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="Mobile phone with posts feed on it"
          priority
          className="w-20 h-20 drop-shadow-[0_0_3px_#000]"
        />
      </Link>
      <nav>
        <ul className="list-none m-0 p-0 flex gap-4">
          <li>
            <Link
              href="/feed"
              className="text-[#eee7ea] no-underline px-4 py-2 text-2xl rounded hover:bg-[#5f5a5c]"
            >
              Feed
            </Link>
          </li>
          <li>
            <Link
              href="/new-post"
              className="bg-[#e32195] text-[#eee7ea] no-underline text-2xl px-4 py-2 rounded hover:bg-[#c321e3]"
            >
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
