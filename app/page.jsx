"use client";
import Image from "next/image";
import ProjectComponent from "./components/ProjectComponent";
import { projectList, services, tools } from "./data/content";
import HomeHero from "./components/HomeHero.jsx"
import HomeFeature from "./components/HomeFeature.jsx"
import HomeServices from "./components/HomeServices.jsx"

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

  return (
    <main className=" ">
      <HomeHero/>
      
      <HomeFeature/>
      
      {/* <section className="bg-white text-black w-11/12 mx-auto py-40">
        <div className="lg:w-3/6">
          <p className="text-4xl font-semibold">
            Harnessing technology for a brighter future
          </p>
          <p className="mt-3 text-lg text-gray-700">
            We believe technology is the answer to the world’s greatest
            challenges. It’s also the cause, so we find ourselves in bit of a
            catch 22 situation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {projectList.map((project, index) => (
            <div key={index}>
              <ProjectComponent key={project.id} {...project} />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="lg:w-4/6 w-5/6 mx-auto ">
          <p className="font-semibold text-2xl lg:text-3xl italic">
            The thing I particularly appreciate about Katalyst Tech service is
            the level of understanding they have for what we want from our web
            application and how best to deliver it. Everything from idea
            generation to the crafting of the web app is on point, helping us to
            communicate with our customers through our web app.
          </p>
          <p className="font-semibold text-3xl mt-2">Anbe</p>
        </div>
      </section> */}
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
