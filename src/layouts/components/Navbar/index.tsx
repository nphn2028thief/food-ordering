"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

import { CPath } from "@/constanst/path";
import Button from "../../../components/common/Button";

const Navbar = () => {
  const [showSidebarMobile, setShowSidebarMobile] = useState<boolean>(false);

  return (
    <header className="flex justify-between items-center p-4">
      <Link
        href={CPath.HOME}
        className="text-primary text-2xl font-semibold uppercase"
      >
        st pizza
      </Link>

      <nav className="hidden md:flex text-gray-500 font-semibold">
        <Link href={""} className="px-8 py-2 capitalize">
          home
        </Link>
        <Link href={""} className="px-8 py-2 capitalize">
          menu
        </Link>
        <Link href={""} className="px-8 py-2 capitalize">
          about
        </Link>
        <Link href={""} className="px-8 py-2 capitalize">
          contact
        </Link>

        <Button primary className="!px-8 !py-2 !font-semibold">
          Login
        </Button>
      </nav>

      <button
        className="flex md:hidden p-2 pl-3 pr-4 -mr-4"
        onClick={() => setShowSidebarMobile(true)}
      >
        <BiMenuAltRight size={28} />
      </button>

      {showSidebarMobile ? (
        <div
          className="fixed inset-0 bg-black/15"
          onClick={() => setShowSidebarMobile(false)}
        ></div>
      ) : null}
    </header>
  );
};

export default Navbar;
