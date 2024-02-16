"use client";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div
      className="
    justify-center 
    items-center
    flex
    overflow-x-hidden
    overflow-y-hidden
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-neutral-800/70"
    >
      <div className="relative w-full md:w-4/6 lg:w-2/5 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className="
         translate
        duration-300
        h-full
        translate-y-0
        opacity-100"
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
              <div className="text-lg font-semibold">Login</div>
            </div>
            <div className="flex flex-col gap-2 p-6">
              <div className="flex flex-col gap-4 mt-3">
                <button
                  onClick={() => {
                    signIn("google");
                  }}
                  className="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full bg-white border-black text-black py-3  text-md font-semibold border-2  "
                >
                  {<FcGoogle size={24} className="absolute left-4 top-3" />}

                  {"Continue With Google"}
                </button>

                <button
                  onClick={() => {
                    signIn("github");
                  }}
                  className="relative  disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full bg-white border-black text-black py-3  text-md font-semibold border-2"
                >
                  <AiFillGithub size={24} className="absolute left-4 top-3" />

                  <p>Continue With Github</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
