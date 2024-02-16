import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaLink } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoIosDoneAll } from "react-icons/io";
import Link from "next/link";

const page = () => {
  const talk1 = "Experinced";
  const talk2 = "yo";

  return (
    <>
      <span className="h-screen ">
        <div className=" flex flex-col mx-6 my-3">
          <span className="font-semibold">Yash raj</span>
          <span>Delhi, India</span>
        </div>
        <span className="flex">
          {" "}
          <div className=" aspect-square w-1/2 h-1/2 lg:h-1/3 lg:w-1/3 relative overflow-hidden rounded-xl mx-6">
            <Image
              fill
              alt="Listings"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1706732147~exp=1706732747~hmac=6a14dddc22cdf18bb2ab095db42076b9113c84a5dc2888ba6dacd7edde63e98a"
              className=" object-cover h-full w-full group-hover:scale-110 transition"
            />
          </div>
          <div className=" flex-col flex  w-1/2 h-1/2 mr-4 ">
            <span className="font-semibold">
              Tech Stack Yash have Experiance With:-
            </span>
            <div className="w-full p-5  border-2 mt-2 border-neutral-300 rounded-md ">
              <p>
                Are you a Woman in Tech
                ?srfgnjsdkljfhnslikdkfjlsei;rjfslpeop;e;dfjspodjkfpo
                wfgjwer;fgjewr orfg jaero;pfgjerop;jgaweoprje{" "}
              </p>
            </div>

            <span className="font-semibold mt-6">Get In touch with Yash:-</span>
            <div className="p-5 flex gap-4 border-2 mt-2 border-neutral-300 rounded-md justify-evenly ">
              <Link href="">
                <FaSquareXTwitter size={30} />
              </Link>

              <Link href="">
                <AiFillGithub size={30} />
              </Link>
              <Link href="">
                <FaLinkedin size={30} />
              </Link>
            </div>

            <span className="font-semibold mt-6">About Yash:-</span>
            <div className="p-5 flex gap-4 border-2 mt-2 border-neutral-300 rounded-md justify-around ">
              <div className="flex gap-1 font-medium">
                <span>Student</span>
                <IoIosDoneAll size={24} />
              </div>
              <div className="flex gap-1 font-medium">
                <span>
                  Experinced <span className="text-xs">(at Talks)</span>
                </span>
                <IoIosDoneAll size={24} />
              </div>
            </div>
          </div>
        </span>
        <div className=" p-6">
          {talk1 && (
            <>
              <span className="font-semibold mt-6">Previous Talks:-</span>
              <div className="p-5 flex gap-4 border-2 mt-2 border-neutral-300 rounded-md justify-around ">
                <span>
                  Understanding Why We Don't Use Pointers to change the value of
                  the element in Slice Data Type in Go Lang!!
                </span>
                <Link href="">
                  <FaLink size={24} />
                </Link>
              </div>
            </>
          )}
          {talk2 && (
            <>
              <div className="p-5 flex gap-4 border-2 mt-2 border-neutral-300 rounded-md justify-around ">
                <span>
                  Understanding Why We Don't Use Pointers to change the value of
                  the element in Slice Data Type in Go Lang!!
                </span>
                <Link href="">
                  <FaLink size={24} />
                </Link>
              </div>
            </>
          )}
        </div>
      </span>
    </>
  );
};

export default page;
