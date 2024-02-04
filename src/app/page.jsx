"use client";
import Image from "next/image";
import { FcBusinesswoman } from "react-icons/fc";
import { GrUserExpert } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiOpenSourceFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { GiSpiderWeb } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import axios from "axios";
import { useState } from "react";

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

  // var profiles = [
  //   {
  //     imageSrc:
  //       "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1706732147~exp=1706732747~hmac=6a14dddc22cdf18bb2ab095db42076b9113c84a5dc2888ba6dacd7edde63e98a",
  //     location: "Delhi, India",
  //     name: "Ben",
  //     techStack: "fhweio vfuhsoei fhjuosieuf jhoweif oiew",
  //     Experince: "Student",
  //   },
  //   {
  //     imageSrc:
  //       "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1706732147~exp=1706732747~hmac=6a14dddc22cdf18bb2ab095db42076b9113c84a5dc2888ba6dacd7edde63e98a",
  //     location: "Delhi, India",
  //     name: "Ben",
  //     techStack: "fhweio vfuhsoei fhjuosieuf jhoweif oiew",
  //     Experince: "Student",
  //   },
  //   {
  //     imageSrc:
  //       "https://img.freepik.com/free-photo/young-bearded",
  //     location: "Delhi, India",
  //     name: "Ben",
  //     techStack: "Python, C++, Java, Rust",
  //     Experince: "Student",
  //   },
  // ];

  async function getProfiles() {
          const res = await axios.get(
        "http://localhost:5000/api/v1/public/fetchAllProfiles",
      );
      console.log(res.data);
      setProfiles(res.data.data);
      console.log(profiles);
  }
  getProfiles();

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

        <div className=" w-3/12  border h-32  flex flex-col  justify-center items-center bg-orange-500 rounded-2xl ">
          <h1 className=" text-neutral-800">Find Any Tech Speakers!</h1>
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
        {profiles.map((profile) => {
          return (
            <>
              <div
                // onClick={() => router.push(`/listings/${profile.id}`)}
                className="col-span-1 cursor-pointer group border-2 border-orange-500 rounded-md text-center "
              >
                <div className=" flex flex-col gap-2 w-full justify-center items-center mt-2">
                  <div className=" aspect-square w-3/4 relative overflow-hidden rounded-xl ">
                    <Image
                      fill
                      alt="Listings"
                      src={profile.imageSrc}
                      className=" object-cover h-full w-full group-hover:scale-110 transition"
                    />
                    <div className="absolute -bottom-[2px] -right-[0px] px-2 pb-[2px] mb-1 text-sm  rounded-full border  bg-white ">
                      {profile.location}
                    </div>
                    <div className="absolute top-[1px] px-1  text-xs  rounded-none border  bg-white ">
                      {profile.Experince}
                    </div>
                  </div>
                </div>

                <div className="font-semibold mt-1 text-lg flex flex-row items-center justify-around">
                  <div>{profile.name}</div>
                  <div className="  gap-2 flex flex-row ">
                    {" "}
                    <FaLinkedin size={26} />
                    <span className="border-l  "></span>
                    <FaGithub size={26} />
                  </div>
                </div>

                <div className=" mt-1  flex flex-row items-center border-t  justify-around">
                  <div className="text-sm">Tech Stack:-{profile.techStack}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
