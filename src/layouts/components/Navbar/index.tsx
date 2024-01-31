"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import { CPath, CPathList } from "@/constanst/path";

const Navbar = () => {
  const pathname = usePathname();

  const [showSidebarMobile, setShowSidebarMobile] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && window.scrollY > 0) {
        headerRef.current.style.boxShadow = "var(--header-box-shadow)";
      } else if (headerRef.current) {
        headerRef.current.style.boxShadow = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="min-h-[var(--header-height)] fixed left-0 top-0 right-0 shadow-header z-[9999] bg-white"
    >
      <div className="max-w-6xl w-full flex justify-between items-center mx-auto p-4 bg-white">
        <Logo />

        <nav className="hidden md:flex text-gray-500 font-semibold">
          {CPathList.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="px-6 lg:px-8 py-2 capitalize"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center lg:gap-4">
            <Button href={CPath.SIGNIN} className="!px-8 !py-2 !font-semibold">
              Sign in
            </Button>
            <Button
              href={CPath.SIGNUP}
              primary
              className="!px-8 !py-2 !font-semibold"
            >
              Sign up
            </Button>
          </div>
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
      </div>
    </header>
  );
};

export default Navbar;
