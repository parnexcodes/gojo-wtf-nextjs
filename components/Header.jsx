import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-[#282C37]">
      <div className="flex justify-between mx-8 py-6 flex-wrap">
        <Link href={'/'}>
        <img className="h-[40px]" src="/logo.png" alt="" />
        </Link>
        <ul className="flex space-x-8 text-white">
          <Link href={"/"}>
            <li className="bg-[#2E343E] hover:bg-lime-500 hover:text-black px-4 py-2 rounded-md">Trending</li>
          </Link>
          <Link href={"/"}>
            <li className="bg-[#2E343E] hover:bg-lime-500 hover:text-black px-4 py-2 rounded-md">Popular</li>
          </Link>
          <Link href={"/"}>
            <li className="bg-[#2E343E] hover:bg-lime-500 hover:text-black px-4 py-2 rounded-md">Recent</li>
          </Link>
        </ul>
        <Link href={"/"}>
          <h1 className="bg-[#2E343E] hover:bg-lime-500 hover:text-black px-4 py-2 rounded-md text-white self-center">
            Login
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
