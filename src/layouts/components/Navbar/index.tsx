"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import Button from "@/components/common/Button";
import { CPath, CPathList } from "@/constanst/path";

const Navbar = () => {
  const pathname = usePathname();

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
        onClick={() => {
          setShowSidebarMobile(true);
          document.body.classList.add("overflow-hidden");
        }}
      >
        <BiMenuAltRight size={28} />
      </button>

      <AnimatePresence>
        {showSidebarMobile ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              className="w-full h-full fixed inset-0 bg-black/25 z-[999]"
              onClick={() => {
                setShowSidebarMobile(false);
                document.body.classList.remove("overflow-hidden");
              }}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0" }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, x: "100%" }}
              className="w-9/12 fixed top-0 right-0 bottom-0 bg-white z-[1000]"
            >
              <div className="p-4">
                <div className="flex items-center gap-4 pb-8 border-b border-solid">
                  <div
                    // style={{
                    //   background:
                    //     "center / cover no-repeat url('https://res.cloudinary.com/drsjohvgv/image/upload/v1704976923/movie-ticket/ijonoal84yo96efkdf5c.jpg')",
                    // }}
                    className="w-[92px] h-[92px] border border-solid p-2 rounded-full overflow-hidden"
                  ></div>
                  <p className="flex-1">Nguyen Nhan</p>
                </div>

                <div className="flex flex-col mt-8 pb-8 border-b border-solid">
                  {CPathList.map((item) => (
                    <Link
                      key={item.id}
                      href={item.path}
                      className={`px-8 py-2 capitalize rounded-md ${
                        pathname === item.path && "text-white bg-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col mt-8">
                  <Button
                    primary
                    className="!py-2"
                    endIcon={<FiLogOut size={16} />}
                  >
                    Log out
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
