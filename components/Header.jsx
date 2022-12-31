import React from "react";
import Link from "next/link";
import Search from "./Search";
import { Icon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <div className="bg-[#282C37]">
      <div className="flex justify-between mx-8 py-6 flex-wrap">
        <Link href={'/'}>
        <img className="h-[64px] rounded-full" src="/logo.png" alt="" />
        </Link>
        <ul className="flex space-x-8 text-white py-2">
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
        <ul className="flex space-x-4 flex-wrap py-2">
          <li>
            <Search />
          </li>
          <li className="pt-2">
            <a
              className="bg-[#2E343E] hover:bg-lime-500 hover:text-black px-4 py-2 rounded-md text-white"
              href="#"
            >
              <Icon className="mr-2" as={AiOutlineUser} />
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
