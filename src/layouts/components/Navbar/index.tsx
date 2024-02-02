"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/api/axiosClient";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import { CPath, CPathList } from "@/constants/path";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { clearUser, setUser } from "@/lib/features/auth/authSlice";
import Loading from "@/components/common/Loading";
import useClickOuside from "@/hooks/useClickOutside";

const Navbar = () => {
  const pathname = usePathname();

  const queryClient = useQueryClient();

  const [showSidebarMobile, setShowSidebarMobile] = useState<boolean>(false);
  const [showPopper, setShowPopper] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);

  const { user } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();

  const ref = useClickOuside(() => setShowPopper(false));

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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getMe"],
    queryFn: async () => {
      const res = await axiosClient.get("/auth/get-me");
      return res.data;
    },
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(clearUser());
    }
  }, [data, dispatch, isError]);

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
              className="flex items-center px-6 lg:px-8 py-2 capitalize"
            >
              {item.name}
            </Link>
          ))}

          <div
            className={`${
              Object.keys(user).length ? "w-[180px] ml-6" : "w-[250px]"
            } flex ${
              isLoading ? "justify-center" : "justify-end"
            } items-center md:gap-4`}
          >
            {Object.keys(user).length ? (
              <>
                <div className="relative border border-solid rounded-full">
                  <Image
                    ref={ref}
                    src="/images/quarter-of-pizza.png"
                    alt="avatar"
                    width={38}
                    height={38}
                    onClick={() => setShowPopper(true)}
                  />

                  {showPopper ? (
                    <motion.div
                      initial={{ translateY: "-12px", opacity: 0 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-[200px] absolute top-[calc(var(--header-height)_-_24px)] -right-2 bg-white rounded-md shadow-popper"
                    >
                      <div className="flex flex-col p-4 border-b border-solid">
                        <span>{user.displayName}</span>
                        <span className="truncate">
                          @{user.email.split("@")[0]}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <Link
                          href={CPath.HOME}
                          style={{ transition: "background 0.3s ease" }}
                          className="flex items-center gap-2 hover:bg-black/5 px-4 py-2 my-2"
                        >
                          <IoMdSettings size={20} />
                          Settings
                        </Link>
                      </div>
                    </motion.div>
                  ) : null}
                </div>

                <Button
                  primary
                  className="!px-8 !py-2 !font-semibold"
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    queryClient.invalidateQueries({ queryKey: ["getMe"] });
                  }}
                >
                  Sign out
                </Button>
              </>
            ) : isLoading ? (
              <Loading className="[&>svg]:w-8 [&>svg]:h-8" />
            ) : (
              <>
                <Button
                  href={CPath.SIGNIN}
                  className="!px-8 !py-2 !font-semibold"
                >
                  Sign in
                </Button>
                <Button
                  href={CPath.SIGNUP}
                  primary
                  className="!px-8 !py-2 !font-semibold"
                >
                  Sign up
                </Button>
              </>
            )}
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
                    <div className="flex flex-col">
                      <p className="flex-1">{user.displayName}</p>
                      <p className="flex-1">@{user.email.split("@")[0]}</p>
                    </div>
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

                  <div className="flex flex-col mt-3 pb-3 border-b border-solid">
                    <Link
                      href={CPath.HOME}
                      className={`flex items-center gap-2 px-8 py-2 capitalize rounded-md ${
                        pathname === CPath.HOME && "text-white bg-primary"
                      }`}
                    >
                      <IoMdSettings size={20} />
                      Settings
                    </Link>
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
