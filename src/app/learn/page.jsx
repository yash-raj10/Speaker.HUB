"use client";

import { useChat } from "ai/react";
import React, { useState, useEffect } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Chat, ChatFeed } from "react-chat-ui";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import Link from "next/link";
import Image from "next/image";

const MODEL_NAME = "gemini-pro";

const page = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  // const handleSendMessage = async () => {
  //   const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  //   const generationConfig = {
  //     temperature: 0.95,
  //     topK: 1,
  //     topP: 1,
  //     maxOutputTokens: 2048,
  //     // Your generation configuration
  //   };
  //   const safetySettings = [
  //     {
  //       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  //       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //     },
  //     // Your safety settings
  //   ];

  //   const chat = model.startChat({
  //     generationConfig,
  //     safetySettings,
  //     history: [
  //       {
  //         role: "user",
  //         parts: [
  //           {
  //             text: "You are McQueen, A friendly neighbourhood lightning-fast chatbot who is implemented on tech Talkers. First, introduce yourself and Start asking questions after asking the user their name only. techTalkers is a website that helps speakers around the world to make their cfps/speaker portfolio just like GitHub is for code and Instagram is for pictures. here one can make their profile and showcase the world the talks they have given on different tech topics and speaking skills, we have also a fill cfp section where one will directly get the cfps forms of the latest tech events happening around the world and they can fill it from there and at last we have a Learn section also,  where you are implemented and your main job is to help the newcomers who wanted to speak at tech events and help them to get started with it. You will be able to answer any questions about talking to sessions and also give them suggestions. you can refer to articles from the internet and YouTube videos like TedTalks also.",
  //           },
  //         ],
  //       },
  //       {
  //         role: "model",
  //         parts: [
  //           {
  //             text: "Hi there! I'm McQueen, your friendly neighborhood lightning-fast chatbot here to help you get started with speaking at tech events. I'm implemented on TechTalkers, a website that helps speakers around the world make their CFPs/speaker portfolios.\n\nSo, what's your name?\n\n(After the user responds with their name)\n\nGreat to meet you, [User's Name]! Now, let's get started.\n\n* What's your experience level with public speaking?\n    * Are you a seasoned speaker or just starting out?\n    * What kind of events have you spoken at before?\n    * What are your strengths and weaknesses as a speaker?\n* What are your goals for speaking at tech events?\n    * Do you want to share your knowledge and expertise?\n    * Are you looking to build your brand or network with other professionals?\n    * What kind of impact do you want to make?\n* What topics are you passionate about?\n    * What are you an expert in?\n    * What do you love talking about?\n* What are your biggest challenges or concerns about speaking at tech events?\n    * Are you worried about being nervous or forgetting your material?\n    * Do you have trouble coming up with creative or engaging content?\n    * Are you concerned about the cost or time commitment involved?\n\nBased on your answers, I can provide you with personalized suggestions and resources to help you get started with speaking at tech events. I can also connect you with other speakers and mentors who can help you on your journey.\n\nSo, what do you say? Are you ready to take the next step and become a tech speaker? Let's do this!",
  //           },
  //         ],
  //       },
  //       {
  //         role: "user",
  //         parts: [{ text: "hey" }],
  //       },
  //       {
  //         role: "model",
  //         parts: [
  //           {
  //             text: "Hey there! It's great to meet you, [insert name]. \n\nSo, you're interested in speaking at tech events? That's awesome! I can definitely help you get started.\n\nWhat are some of the topics that you're passionate about? What kind of talks would you like to give?",
  //           },
  //         ],
  //       },
  //       {
  //         role: "user",
  //         parts: [{ text: "hlo" }],
  //       },
  //       {
  //         role: "model",
  //         parts: [
  //           {
  //             text: "Hello there! Welcome to TechTalkers. I'm McQueen, your friendly neighborhood lightning-fast chatbot. I'm here to help you get started with speaking at tech events.\n\nWhat's your name?\n\n(After the user responds with their name)\n\nNice to meet you, [User's Name]!\n\nNow, let's get started. What are your goals for speaking at tech events? What kind of impact do you want to make?",
  //           },
  //         ],
  //       },
  //     ],
  //   });

  //   const result = await chat.sendMessage(inputText);
  //   const response = result.response;
  //   const text = response.text();

  //   console.log(text);

  //   setMessages(text);
  //   setInputText("");
  // };

  // console.log(messages);

  return (
    <>
      <div className="mockup-browser border-2 border-orange-500 m-6">
        <div className="mockup-browser-toolbar">
          <div className="input border border-orange-500">
            https://TechTalkers.com
          </div>
        </div>
        <div className="flex justify-center px-4 py-16 border-t border-orange-500 font-bold">
          Learn, Inspire, Empower!
        </div>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Step:-1</time>
            <div className="text-lg font-black ">
              Develop Technical Expertise & Identify Your Niche:
            </div>
            Acquire a deep understanding of your chosen tech domain, Stay
            updated on the latest industry trends, tools, and technologies,
            Establish yourself as a subject matter expert in your field & Define
            your specific area of interest or expertise within the tech field,
            Focus on a niche that aligns with your passion and
            <iframe
              className="p-6 w-full  "
              width="560"
              height="400"
              src="https://www.youtube.com/embed/9l3FkFoklmY?si=5xGTqWxGUsgofP_w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Step:-2</time>
            <div className="text-lg font-black">
              Master Communication Skills:
            </div>
            Hone your ability to explain complex technical concepts clearly and
            concisely. Practice effective verbal and written communication to
            connect with diverse audiences.
            <iframe
              className="p-6 w-full  "
              width="560"
              height="400"
              src="https://www.youtube.com/embed/HAnw168huqA?si=--8Pj8iruouUCXEt"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Step:- 3</time>
            <div className="text-lg font-black">
              Engage in Public Speaking Opportunities:
            </div>
            Start with smaller settings, such as meetups or workshops, to gain
            initial speaking experience. Gradually progress to larger audiences,
            including conferences and webinars.
            <iframe
              className="p-6 w-full "
              width="560"
              height="400"
              src="https://www.youtube.com/embed/P6QY0LXMYEo?si=IIQwRQfkFUVnriKN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Step:- 4</time>
            <div className="text-lg font-black">
              Diversify Presentation Styles:
            </div>
            Experiment with different presentation formats, such as lightning
            talks, workshops, or panel discussions. Adapt your speaking style to
            suit various platforms, from in-person to virtual settings.
            <iframe
              className="p-6 w-full "
              width="560"
              height="400"
              src="https://thinkbusinessevents.com.au/portfolio-items/presentations-types-interactive-conference/"
            ></iframe>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Step:- 5</time>
            <div className="text-lg font-black">Build an Online Presence:</div>
            Create a personal brand through blogging, social media, or
            contributing to tech communities. Share your knowledge and insights
            to establish credibility and attract speaking opportunities.
            <iframe
              className="p-6 w-full "
              width="560"
              height="400"
              src="https://www.youtube.com/embed/PGvRLDa_6w4?si=xwHElH0VsBuIKrev"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </li>
      </ul>

      {/* <div className="container mx-auto p-4">
        <div className="chat-container flex flex-col items-start">
          <ChatFeed
            messages={[messages]}
            onSendMessage={handleSendMessage}
            user={{ name: "You" }}
            bot={{ name: "McQueen" }}
            className="chat-messages overflow-y-auto"
          />
          <div>{messages}</div>
          <div className="chat-input mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="input-field w-full border border-gray-300 rounded-md p-2"
            />
            <button
              onClick={handleSendMessage}
              className="send-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      </div> */}

      <div>
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4 border-2 border-neutral-700 px-4 py-2 rounded-2xl">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Learn</a>
          <a className="link link-hover">Cfps</a>
        </nav>
        <nav className="gap-6">
          <span>Made with ❤️ By :-</span>
          <span className="flex gap-32">
            {" "}
            <div className="items-center justify-center flex-col flex gap-y-2 ">
              <Image
                className="rounded-full border-2 border-black"
                height={60}
                width={60}
                src="https://avatars.githubusercontent.com/u/70265590?v=4"
              />
              <div className="grid grid-flow-col gap-4">
                <Link href="https://twitter.com/notnotrachit">
                  <FaSquareXTwitter size={24} />
                </Link>
                <Link href="https://github.com/notnotrachit">
                  <AiFillGithub size={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/rachitkhurana1/">
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
            <div className="items-center justify-center flex-col flex gap-y-2 ">
              <Image
                className="rounded-full border-2 border-black"
                height={60}
                width={60}
                src="https://avatars.githubusercontent.com/u/114144836?s=400&u=b6e489363b59e9cb5e6bff71f1c86b1e503c355e&v=4"
              />
              <div className="grid grid-flow-col gap-4">
                <Link href="https://twitter.com/Yashrajstwt">
                  <FaSquareXTwitter size={24} />
                </Link>
                <Link href="https://github.com/yash-raj10">
                  <AiFillGithub size={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/yash-raj-in/">
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
            <div className="items-center justify-center flex-col flex gap-y-2 ">
              <Image
                className="rounded-full border-2 border-black"
                height={60}
                width={60}
                src="https://avatars.githubusercontent.com/u/91340059?v=4"
              />
              <div className="grid grid-flow-col gap-4">
                <Link href="https://twitter.com/AdiTechSavvy">
                  <FaSquareXTwitter size={24} />
                </Link>
                <Link href="https://github.com/Aditya1404Sal">
                  <AiFillGithub size={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/aditya-salunkhe-24477a256/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
          </span>
        </nav>
        <aside>
          <p>Copyright © 2024 - TechTalkers!</p>
        </aside>
      </footer>
    </>
  );
};

export default page;
