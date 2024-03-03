"use client";
import Image from "next/image";
import { FcBusinesswoman } from "react-icons/fc";
import { GrUserExpert } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiOpenSourceFill } from "react-icons/ri";
import {
  FaBusinessTime,
  FaCode,
  FaGolang,
  FaSquareXTwitter,
  FaX,
} from "react-icons/fa6";
import { FaRust, FaSearch } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { GiSpiderWeb } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
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

  const womanInTech = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/profiles");
      console.log(response.data);
      setProfiles(response.data.filter((profile) => profile.woman === "WIT"));
    } catch (error) {
      console.log(`Error fetching data`, error);
    }
  };

  const peopleInNonTech = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/profiles");
      console.log(response.data);
      setProfiles(
        response.data.filter((profile) => profile.field === "Non Tech")
      );
    } catch (error) {
      console.log(`Error fetching data`, error);
    }
  };

  const peopleInTech = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/profiles");
      console.log(response.data);
      setProfiles(response.data.filter((profile) => profile.woman === "Tech"));
    } catch (error) {
      console.log(`Error fetching data`, error);
    }
  };

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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 w-full">
          <div
            onClick={womanInTech}
            className="
        flex 
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
            <FcBusinesswoman size={26} />
            <div
              className=" hover:text-neutral-800
        transition
        text-neutral-500 font-medium text-sm"
            >
              Woman In Tech
            </div>
          </div>
          <div
            onClick={peopleInNonTech}
            className="
        flex
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
            <FaBusinessTime size={26} />
            <div
              className=" hover:text-neutral-800
        transition
        text-neutral-500 font-medium text-sm"
            >
              Non Tech
            </div>
          </div>
          <div
            onClick={peopleInTech}
            className="
        flex
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
            <FaCode size={26} />
            <div
              className=" hover:text-neutral-800
        transition
        text-neutral-500 font-medium text-sm"
            >
              Tech
            </div>
          </div>

          <div className=" border h-32  flex flex-col  justify-center items-center bg-red-500 rounded-2xl ">
            <div className="  mx-2 text-gray-600 ">
              <div className="w-full  relative">
                <input
                  type="search"
                  id="searchbox"
                  onInput={() => liveSearch()}
                  placeholder=" "
                  className={` rounded-2xl peer  w-full p-5 font-light bg-white border-2  outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                />
                <label
                  className={`absolute flex gap-2 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400 `}
                >
                  <FaSearch size={22} /> Search for any Niche
                </label>
              </div>
            </div>
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
                      <span className="font-bold">Skills:-</span>{" "}
                      {profile.techstack}
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
