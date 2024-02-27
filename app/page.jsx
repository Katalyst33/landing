"use client";
import Image from "next/image";
import ProjectComponent from "./components/ProjectComponent";
import { projectList, services, tools } from "./data/content";
import HomeHero from "./components/HomeHero.jsx"
import HomeFeature from "./components/HomeFeature.jsx"
import HomeServices from "./components/HomeServices.jsx"
import {TypewriterEffect} from "./components/typewriter-effect";

export default function Home() {
  const serviceImage = [
    {
      image1:
        "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1697018970/medium-shot-couple-with-laptop_f077br.jpg",
    },
  ];
  const homeImage = [
    {
      homeImage:
        "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1697268006/rear-view-programmer-working-all-night-long_x0yjx4.jpg",
    },
  ];
    const words = [
        {
            text: "Build",
        },
        {
            text: "awesome",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "Aceternity.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

  return (
    <main className=" ">
      <div className={`bg-black p-10`}>
         <TypewriterEffect words={words}/>
      </div>
      <HomeHero/>

      <HomeFeature/>


      <section className="py-40 w-11/12 mx-auto">
        <div className="mx-auto ">
        <HomeServices/>
        </div>
      </section>
      <section className="w-11/12 mx-auto rounded-3xl bg-black text-white">
        <div className="w-4/6 mx-auto py-20">
          <p className="text-4xl">Tell us about your project</p>
          <button className="px-3 py-2 my-10 text-black bg-white rounded-lg">
            Leave us a message
          </button>
          <hr className="text-gray-500 mb-10" />
          <p className="font-semibold mb-2">Katalyst Technologies</p>
          <p>
            At Katalyst Technologies we don't just design digital products, we
            design experiences for people like you, You need the right minds
            that can interpret your ideas and make it a reality we are glad you
            found us.
          </p>
        </div>
      </section>
    </main>
  );
}
