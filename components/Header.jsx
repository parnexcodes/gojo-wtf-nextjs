import React from "react";
import Link from "next/link";
import Search from "./Search";
import { Icon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <>
      <nav class="px-2 sm:px-4 py-2.5 rounded bg-[#282C37]">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link href={'/'} class="flex items-center">
            <img src="/logo.png" class="h-8 mr-3 sm:h-9" alt="Flowbite Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex justify-between p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-[#282C37]">
              <li>
                <Search />
              </li>
              <li className="pt-2">
                <Link className="text-white" href="/">
                  <Icon as={AiOutlineUser} boxSize={"7"} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
