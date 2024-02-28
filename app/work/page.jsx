"use client";
import Image from "next/image";
import {
  default as man1,
  default as man2,
  default as man3,
} from "../../public/team1.jpg";
import ProjectComponent from "../components/ProjectComponent";
import { projectList } from "../data/content";

export default function about() {
  const teamlist = [
    {
      id: 1,
      image: man1,
      name: "Brian Azukaeme",
      role: "Senior Front-end Engineer",
    },
    {
      id: 2,
      image: man2,
      name: "Chima Peter",
      role: "Mobile App Developer",
    },
    {
      id: 3,
      image: man3,
      name: "Samuel Nmeje",
      role: "Senior Front-end Engineer",
    },
  ];
  const workImage = [
    {
      workImage:
        "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1699510986/Udemba/close-up-people-learning-together-office_cyrj8d.jpg",
    },
  ];
  const Teamcard = (props) => {
    return (
      <div className="relative mb-12 lg:mb-0">
        <Image
          priority={true}
          src={props.image}
          alt="Picture or Brian Azukaeme"
          className="lg:w-52  "
        />
        <div className="absolute bottom-6 text-white left-4">
          <p>{props.name}</p>
          <p>{props.role}</p>
        </div>
      </div>
    );
  };

  return (
    <main>
      <section className="container mx-auto">
        <div>
          <div className="container px-6" >
            <p className="mb-2 font-semibold">Our Work</p>
            <p className="text-4xl font-semibold">Projects we have handled  </p>
            <p className="mt-3 text-lg text-gray-700">
            At Katalyst Technologies, we take immense pride in the projects we undertake and the solutions we deliver. Our portfolio reflects our commitment to excellence, innovation, and client satisfaction. With a diverse range of projects spanning various industries and technological domains, we strive to showcase our expertise in custom software development, cloud services, data analytics, and more. Explore our work to witness how we leverage technology to drive success for our clients. </p>
          </div>
          <div className="col-span-2">
            <div className="col-span-2">
              {workImage.map((image, index) => (
                <Image
                  key={index}
                  className=" mt-10 mb-10 px-2 h-96 object-cover"
                  src={image.workImage}
                  priority={true}
                  alt="Description of the image"
                  width={2000}
                  height={1400}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 lg:flex justify-center">
          <div className="lg:border-r border-gray-500 px-20 mb-10 lg:mb-0">
            <p className="text-xl font-semibold mb-2">Over 30</p>
            <p>Completed solutions</p>
          </div>
          <div className="lg:border-r border-gray-500 px-20 mb-10 lg:mb-0">
            <p className="text-xl font-semibold mb-2">15m</p>
            <p>users of solutions</p>
          </div>
          <div className="px-20">
            <p className="text-xl font-semibold mb-2">$200K</p>
            <p>in invoice</p>
          </div>
        </div>
      </section>

      <div className="mt-8 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
          {projectList.map((project, index) => (
            <div key={index}>
              <ProjectComponent key={project.id} {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
