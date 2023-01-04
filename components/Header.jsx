import React from "react";
import Link from "next/link";
import Search from "./Search";
import { Icon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <div className="bg-[#282C37]">
      <div className="flex md:justify-between justify-center py-4 flex-wrap">
        <Link href={'/'}>
        <img className="h-[50px] rounded-full" src="/logo.png" alt="" />
        </Link>
        {/* <ul className="flex gap-4 text-white py-2">
          <Link href={"/"}>
            <li className="bg-[#2E343E] hover:bg-lime-500 hover:text-black px-4 py-2 rounded-md">Trending</li>
          </Link>
          <Link href={"/"}>
            <li className="bg-[#2E343E] hover:bg-lime-500 hover:text-black px-4 py-2 rounded-md">Popular</li>
          </Link>
          <Link href={"/"}>
            <li className="bg-[#2E343E] hover:bg-lime-500 hover:text-black px-4 py-2 rounded-md">Recent</li>
          </Link>
        </ul> */}
        <ul className="md:flex md:gap-8 md:flex-wrap md:py-2 md:mx-8 hidden">
          <li>
            <Search />
          </li>
          <li className="pt-2">
            <a
              className="text-white"
              href="#"
            >
              <Icon as={AiOutlineUser} boxSize={'7'}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
