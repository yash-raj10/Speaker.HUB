"use client";
import Image from "next/image";
import { FcBusinesswoman } from "react-icons/fc";
import { GrUserExpert } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiOpenSourceFill } from "react-icons/ri";
import { FaGolang, FaSquareXTwitter, FaX } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { GiSpiderWeb } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  function liveSearch() {
    let cards = document.querySelectorAll(".cards");
    let search_query = document.getElementById("searchbox").value;
    for (var i = 0; i < cards.length; i++) {
      if (
        cards[i].innerText.toLowerCase().includes(search_query.toLowerCase())
      ) {
        cards[i].classList.remove("is-hidden");
      } else {
        cards[i].classList.add("is-hidden");
      }
    }
  }

  const categories = [
    {
      label: "Woman In Tech",
      icon: FcBusinesswoman,
    },
    {
      label: "New Comers",
      icon: PiStudentDuotone,
    },
    {
      label: "Experience",
      icon: GrUserExpert,
    },
    {
      label: "Backend/ Frontend",
      icon: GiSpiderWeb,
    },
    {
      label: "AI/ML",
      icon: GiArtificialIntelligence,
    },
    {
      label: "FOSS",
      icon: RiOpenSourceFill,
    },
    {
      label: "GO",
      icon: FaGolang,
    },
    {
      label: "Rust",
      icon: FaRust,
    },
  ];

  useEffect(() => {
    const getProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/profiles");
        console.log(response.data);
        setProfiles(response.data);
      } catch (error) {
        console.log(`Error fetching data`, error);
      }
    };

    getProfiles();
  }, []);

  return (
    <>
      <div
        className="
      pl-1
      pt-4
      flex 
      flex-row 
      items-center 
      justify-between
      overflow-x-auto
    "
      >
        {categories.map((item) => (
          <div
            // onClick={handleClick}
            key={item.label}
            className="
        flex 
        w-1/12
        h-32
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-2
        
        cursor-pointer

        border-neutral-600
        rounded-xl  
      "
          >
            <item.icon size={26} />
            <div
              className=" hover:text-neutral-800
        transition
        text-neutral-500 font-medium text-sm"
            >
              {item.label}
            </div>
          </div>
        ))}

        <div className=" w-3/12  border h-32  flex flex-col  justify-center items-center bg-red-500 rounded-2xl ">
          <h1 className=" text-neutral-800">Search Speakers.</h1>
          <div className="  mx-2 text-gray-600 ">
            <input
              type="search"
              id="searchbox"
              onInput={() => liveSearch()}
              placeholder="Search for any Niche Tech"
              className="w-full max-w-xs sm:max-w-2xl shadow-2xl shadow-white border-gray-600 border border-solid rounded-full px-3 py-1 mt-2 mb-8 mr-4   focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className=" mt-4 px-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {profiles.map((profile) => (
          <>
            <div key={profile._id} className="cards" id="cards">
              <Link href={`/profiles/${profile._id}`}>
                <div className="col-span-1 cursor-pointer group border-2 border-orange-500 rounded-md text-center ">
                  <div className=" flex flex-col gap-2 w-full justify-center items-center mt-2">
                    <div className=" aspect-square w-3/4 relative overflow-hidden rounded-xl ">
                      <Image
                        fill
                        alt="Listings"
                        src={profile.imagesrc}
                        className=" object-cover h-full w-full group-hover:scale-110 transition"
                      />
                      <div className="absolute -bottom-[2px] -right-[0px] px-2 pb-[2px] mb-[2px] text-sm  rounded-full border  bg-white ">
                        {profile.isa}
                      </div>
                      <div className="absolute top-[1px] px-1  text-xs  rounded-none border  bg-white ">
                        {profile.location}
                      </div>
                    </div>
                  </div>

                  <div className="font-semibold mt-1 text-lg flex flex-row items-center justify-around">
                    <div>{profile.name}</div>
                    <div className="  gap-2 flex flex-row ">
                      {profile.linkedin && (
                        <>
                          <Link
                            href={
                              "https://www.linkedin.com/in/" + profile.linkedin
                            }
                          >
                            {" "}
                            <FaLinkedin size={26} />
                          </Link>
                        </>
                      )}

                      {profile.twtr && (
                        <>
                          <span className="border-l  "></span>

                          <Link href={"https://twitter.com/" + profile.twtr}>
                            {" "}
                            <FaSquareXTwitter size={26} />
                          </Link>
                        </>
                      )}
                    </div>
                  </div>

                  <div className=" mt-1  flex flex-row items-center border-t p-2 justify-around">
                    <div className="text-sm">
                      Tech Stack:-{profile.techstack}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
