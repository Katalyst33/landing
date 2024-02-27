"use client";
import Image from "next/image";
import ProjectComponent from "./components/ProjectComponent";
import { projectList, services, tools } from "./data/content";
import HomeServices from "./components/HomeServices.jsx";
import TestimonialFeature from "./components/TestimonialFeature.jsx";
import BeforeFooter from "./components/BeforeFooter.jsx";
import { TypewriterEffect } from "./components/typewriter-effect";
import HomeHero from "./components/HomeHero.jsx";
import HomeFeature from "./components/HomeFeature.jsx";

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
      <HomeHero />

      <HomeFeature />

      <section className="py-40 w-11/12 mx-auto">
        <div className="mx-auto ">
          <HomeServices />
          <TestimonialFeature />
          <div className={`bg-black p-10`}>
            <TypewriterEffect words={words} />
          </div>
        </div>

        <BeforeFooter />
      </section>
    </main>
  );
}
