"use client";
import React, { useCallback } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaLink } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import axios from "axios";

const page = () => {
  const { register, setValue, watch, reset, handleSubmit } = useForm({
    defaultValues: {
      imageSrc: "",
    },
  });

  const onSubmit = async (data) => {
    if (data.woman !== "WIT") {
      data.woman = "No"; // or data.woman = false;
    }

    if (data.experience !== "Experienced") {
      data.experience = "No"; // or data.woman = false;
    }
    try {
      const res = await axios.post(
        "http://localhost:4000/api/addProfile",
        data
      );

      if (res.data.success) {
        console.log(res.data.message);
      } else {
        console.log(res.data.error);
      }
    } finally {
      reset();
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // window.location.href = "/";
      console.log(data);
    }

    // try {
    //   const res = await axios.post('http://localhost:5000/api/v1/public/addProfile',data);
    //   if(res.data.success){
    //     console.log(res.data.message);
    //   }else{
    //     console.log(res.data.error);
    //   }
    //   try {
    //     console.log(data);
    //     reset();
    //   } finally {
    //     await new Promise((resolve) => setTimeout(resolve, 1000));
    //     window.location.href = "/";
    //     console.log(data);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onChange = (value) => {
    setCustomValue("imageSrc", value);
  };

  const handleUpload = useCallback((result) => {
    onChange(result.info.secure_url);
  }, []);

  let imageSrc = watch("imageSrc");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
              <div className="text-lg font-semibold">OnBoard Yourself!</div>
            </div>
            <div className="flex flex-row gap-2 p-4">
              <CldUploadWidget
                onUpload={handleUpload}
                uploadPreset="jifxbwzs"
                options={{ maxFiles: 1 }}
              >
                {({ open }) => {
                  return (
                    <div
                      onClick={() => open?.()}
                      className=" relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral flex flex-col justify-center items-center gap-4 text-neutral-600"
                    >
                      <TbPhotoPlus size={30} />
                      <div className="font-semibold text-sm">
                        Click to Upload
                      </div>
                      {imageSrc && (
                        <div className="absolute inset-0 w-full h-full ">
                          <Image
                            alt="Upload"
                            fill
                            style={{ objectFit: "cover" }}
                            src={imageSrc}
                          ></Image>
                        </div>
                      )}
                    </div>
                  );
                }}
              </CldUploadWidget>

              <div className="flex flex-col gap-4 mt-3">
                <div className="w-full  relative">
                  <input
                    // id={id}
                    // disabled={disabled}
                    {...register("name")}
                    placeholder=" "
                    className={` peer  w-full p-5 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                  />
                  <label
                    className={`absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400 `}
                  >
                    Your Name
                  </label>
                </div>
                <div className="w-full  relative">
                  <input
                    // id={id}
                    // disabled={disabled}
                    {...register("location")}
                    placeholder=" "
                    className={` peer w-full p-5 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                  />
                  <label
                    className={`absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400 `}
                  >
                    Your Location (City, Country)
                  </label>
                </div>

                <div className="flex gap-1">
                  <div className="w-full   relative">
                    <input
                      // id={id}
                      // disabled={disabled}
                      {...register("github")}
                      placeholder=" "
                      className={` peer w-full p-5 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                    />
                    <label
                      className={`absolute text-base duration-150 transform -translate-y-[15px] top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black-400 `}
                    >
                      <span className="flex gap-[2px]">
                        {" "}
                        <AiFillGithub size={24} />{" "}
                        <span className="text-neutral-500 text-sm">
                          {" "}
                          @handle{" "}
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="w-full  relative">
                    <input
                      // id={id}
                      // disabled={disabled}
                      {...register("twtr")}
                      placeholder=" "
                      className={` peer  w-full p-5 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                    />
                    <label
                      className={`absolute text-base duration-150 transform -translate-y-[15px] top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black-400 `}
                    >
                      <span className="flex gap-[2px]">
                        {" "}
                        <FaSquareXTwitter size={24} />{" "}
                        <span className="text-neutral-500 text-sm">
                          {" "}
                          @handle
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="w-full  relative">
                    <input
                      // id={id}
                      // disabled={disabled}
                      {...register("linkedIn")}
                      placeholder=" "
                      className={` peer w-full p-5 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                    />
                    <label
                      className={`absolute text-base duration-150 transform -translate-y-[15px] top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black-400 `}
                    >
                      <span className="flex gap-[2px]">
                        {" "}
                        <FaLinkedin size={24} />{" "}
                        <span className="text-neutral-500 text-sm">
                          {" "}
                          (Link)
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------------------------------- */}
            <div className=" px-6 pb-6">
              {" "}
              <div className="w-full  relative ">
                <input
                  // id={id}
                  // disabled={disabled}
                  {...register("techStack")}
                  placeholder=" "
                  className={` peer  w-full p-5 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                />
                <label
                  className={`absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400 `}
                >
                  What's your Tech Stack? (a, b, c...)
                </label>
              </div>
              {/* ------------------------------------------------- */}
              <div className="flex w-full p-5 pt-6 border-2 mt-2 border-neutral-300 rounded-md ">
                <p>You are a? </p>
                <span className="pl-10">
                  {" "}
                  <input
                    type="radio"
                    id="Student"
                    name="fav_language"
                    value="Student"
                    {...register("isA")}
                  />
                  <label className="p-1" htmlFor="Student">
                    Student
                  </label>
                </span>

                <span className="pl-4">
                  {" "}
                  <input
                    type="radio"
                    id="Working Professional"
                    name="fav_language"
                    value="Working Professional"
                    {...register("isA")}
                  />
                  <label className="p-1" htmlFor="Working Professional">
                    Working Professional
                  </label>
                </span>
              </div>
              {/* ------------------------------------------------- */}
              <div className="flex w-full p-5 pt-6 border-2 mt-2 border-neutral-300 rounded-md ">
                <p>Are you a Woman in Tech ? </p>
                <span className="pl-10">
                  <input
                    type="checkbox"
                    id="WIT"
                    value="WIT"
                    {...register("woman")}
                  />
                  <label className="p-1" htmlFor="WIT">
                    Yes
                  </label>
                </span>
              </div>
              {/* ------------------------------------------------- */}
              <div className=" w-full p-5 border-2 mt-2 border-neutral-300 rounded-md ">
                <div className="flex pb-2">
                  {" "}
                  <p>You have Experience Talking at events? </p>
                  <span className="pl-10">
                    {" "}
                    <input
                      type="checkbox"
                      id="Experience"
                      value="Experienced"
                      {...register("experience")}
                    />
                    <label className="p-1" htmlFor="Experience">
                      Yes
                    </label>
                  </span>
                </div>
                <hr />
                <p className="pt-2 text-sm text-neutral-700">
                  If Yes? PLease Add Topics & Respected link of Video/Post
                  related to it. (if any){" "}
                </p>
                <div className="w-full p-4 flex gap-2 border-2 mt-2 border-neutral-300 rounded-md">
                  <span className="">
                    <div className="w-full mb-2 relative">
                      <input
                        {...register("talk1")}
                        placeholder=" "
                        className={` peer w-full p-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                      />
                    </div>
                    <div className="w-full   relative">
                      <input
                        {...register("talk2")}
                        placeholder=" "
                        className={` peer w-full p-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                      />
                    </div>
                  </span>
                  <span>
                    <div className="w-full  mb-2 relative">
                      <input
                        {...register("talk1Link")}
                        placeholder=" "
                        className={` peer w-full p-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                      />
                      <label
                        className={`absolute text-base duration-150 transform -translate-y-[15px] top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black-400 `}
                      >
                        <span className="flex gap-[2px]">
                          {" "}
                          <FaLink height={18} />
                        </span>
                      </label>
                    </div>
                    <div className="w-full  relative">
                      <input
                        {...register("talk2Link")}
                        placeholder=" "
                        className={` peer w-full p-2 pt-6 font-light bg-white border-2 rounded-md outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black`}
                      />
                      <label
                        className={`absolute text-base duration-150 transform -translate-y-[15px] top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black-400 `}
                      >
                        <span className="flex gap-[2px]">
                          {" "}
                          <FaLink height={18} />
                        </span>
                      </label>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <button className="mb-4  text-lg font-semibold  " type="submit">
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
