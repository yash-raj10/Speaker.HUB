"use client";
import React, { useCallback, useState } from "react";
import { Roboto } from "next/font/google";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import useLoginModel from "../hooks/useLoginModel";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const src = null;
  const currentUser = null;

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={roboto.className}>
      <div className=" bg-red-500 flex justify-between items-center border shadow-md py-1">
        <div className=" hidden md:flex lg:flex gap-1  items-center ">
          {/* <p>Followers: {ProfilePage.data.}</p> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6z"></path>
            <path d="M8 12c0 2.206 1.794 4 4 4s4-1.794 4-4h-2v-2h2V8h-2V6h2c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 0 0-.209.025A4.006 4.006 0 0 0 8 6h4v2H8v2h4v2H8z"></path>
          </svg>
          {/* <ReactSVG src={SvgLogo} /> */}
          <span className=" font-extrabold text-xl">Speaker.HUB!</span>
        </div>
        <div className="flex border gap-3.5 bg-slate-100 border-gray-300 rounded-2xl shadow-sm shadow-gray-400 px-2 py-1 m-1">
          <Link href="/">
            {" "}
            <div className=" items-center flex">Profiles </div>
          </Link>

          <span className="border-l border-gray-300 "></span>
          <Link href="/learn">
            {" "}
            <div className=" items-center flex">Learn </div>
          </Link>
          <span className="border-l border-gray-300 "></span>
          <Link href="/Cfps">
            {" "}
            <div className=" items-center flex">CFPs </div>
          </Link>
        </div>

        {/* ----------------------------------UserMenu--------------------------------------------- */}

        <div className="flex border gap-3 bg-slate-100 border-gray-300 rounded-2xl shadow-sm shadow-gray-400 px-2 py-[2px] m-1">
          <Link href="/addProfile" className="items-center flex">
            {" "}
            Add YourSelf!
          </Link>
          <div className="flex gap-1 border-2 rounded-2xl px-2 py-[2px]">
            {/* <Link
              href={"/"}
              className="  bg-orange-600 flex border gap-1 border-gray-300 rounded-xl shadow-sm shadow-gray-400 p-1 "
            >
              {(src && (
                <Image
                  className="rounded-full"
                  width={24}
                  height={24}
                  src={src}
                  alt="Profile"
                />
              )) || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px] text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Link> */}

            <UserButton />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" absolute rounded-lg shadow-md w-[60vw] md:w-2/4  bg-slate-300 overflow-hidden right-0 top-12 text-sm">
          {/* <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <div
                  onClick={() => {}}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  My Profile
                </div>
                <div
                  onClick={() => {}}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Learn
                </div>
                <div
                  onClick={() => {}}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Search for CFPs!
                </div>
                <div
                  //onClick={Profile.onOpen}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Add YourSelf!
                </div>
                <hr />
                <div
                  //onClick={() => signOut()}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
              </>
            )}
          </div> */}
        </div>
      )}
    </div>
  );
};
