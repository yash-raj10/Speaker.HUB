import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoIosDoneAll } from "react-icons/io";
import Link from "next/link";
import axios from "axios";

async function getProfile(id) {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/profiles/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`Error fetching data`, error);
  }
}

export default async function page({ params }) {
  const id = await params.id;
  console.log(id);
  const profile = await getProfile(params.id);

  return (
    <>
      <span className="h-screen ">
        <div className=" flex flex-col mx-6 my-3">
          <span className="font-semibold">{profile.name}</span>
          <span>{profile.location}</span>
        </div>
        <span className="flex">
          {" "}
          <div className=" aspect-square w-1/2 h-1/2 lg:h-1/3 lg:w-1/3 relative overflow-hidden rounded-xl mx-6">
            <Image
              fill
              alt="Listings"
              src={profile.imagesrc}
              className=" object-cover h-full w-full group-hover:scale-110 transition"
            />
          </div>
          <div className=" flex-col flex  w-1/2 h-1/2 mr-4 ">
            <span className="font-semibold">
              Tech Stack {profile.name} have Experiance With:-
            </span>
            <div className="w-full p-5  border-2 mt-2 border-neutral-300 rounded-md ">
              <p>{profile.techstack}</p>
            </div>

            <span className="font-semibold mt-6">
              Get In touch with {profile.name}:-
            </span>
            <div className="p-5 flex gap-4 border-2 mt-2 border-neutral-300 rounded-md justify-evenly ">
              {profile.linkedin && (
                <>
                  <Link
                    href={"https://www.linkedin.com/in/" + profile.linkedin}
                  >
                    {" "}
                    <FaLinkedin size={30} />
                  </Link>
                </>
              )}
              {profile.twtr && (
                <>
                  <span className="border-l  "></span>

                  <Link href={"https://twitter.com/" + profile.twtr}>
                    {" "}
                    <FaSquareXTwitter size={30} />
                  </Link>
                </>
              )}{" "}
              {profile.twtr && (
                <>
                  <span className="border-l  "></span>

                  <Link href={"https://github.com/" + profile.github}>
                    {" "}
                    <AiFillGithub size={30} />
                  </Link>
                </>
              )}
              {profile.woman == "n" && (
                <>
                  {" "}
                  <Link href="">
                    <FaLinkedin size={30} />
                  </Link>
                </>
              )}
            </div>

            <span className="font-semibold mt-6">About {profile.name}:-</span>
            <div className="p-5 flex gap-4 border-2 mt-2 border-neutral-300 rounded-md justify-around ">
              {profile.isa == "Student" && (
                <>
                  <div className="flex gap-1 font-medium">
                    <span>Student</span>
                    <IoIosDoneAll size={24} />
                  </div>
                </>
              )}

              {profile.isa == "Working Professional" && (
                <>
                  <div className="flex gap-1 font-medium">
                    <span>Working Professional</span>
                    <IoIosDoneAll size={24} />
                  </div>
                </>
              )}

              {profile.woman == "WIT" && (
                <>
                  <div className="flex gap-1 font-medium">
                    <span>Woman in Tech</span>
                    <IoIosDoneAll size={24} />
                  </div>
                </>
              )}

              {profile.experience == "Experienced" && (
                <>
                  <div className="flex gap-1 font-medium">
                    <span>
                      Experienced <span className="text-xs">(at Talks)</span>
                    </span>
                    <IoIosDoneAll size={24} />
                  </div>
                </>
              )}
            </div>
          </div>
        </span>
        <div className=" p-6">
          {profile.talk1 && (
            <>
              <div className="p-5 flex gap-8 border-2 mt-2 border-neutral-300 rounded-md justify-around ">
                <span>{profile.talk1}</span>
                <span className=" flex pr-8 justify-center items-center">
                  <Link href={profile.talk1link}>
                    <FaLink size={24} />
                  </Link>
                </span>
              </div>
            </>
          )}
          {profile.talk2 && (
            <>
              <div className="p-5 flex gap-8 border-2 mt-2 border-neutral-300 rounded-md justify-around ">
                <span>{profile.talk2}</span>
                <span className=" flex pr-8 justify-center items-center">
                  <Link href={profile.talk2link}>
                    <FaLink size={24} />
                  </Link>
                </span>
              </div>
            </>
          )}
        </div>
      </span>
    </>
  );
}
