'use client';
import BeforeFooter from '../../components/BeforeFooter.jsx';
import ProjectList from '../../components/projects/ProjectList.jsx';
import GuestLayout from "../../layouts/guest-layouts";

export default function project() {
  return (
    <main>
      <section className="container mx-auto lg:px-10">
        <div className=" container">
          <div className="mb-10  py-10">
            <span className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-secondary-500/20">
              Our Work
            </span>
            <p className="text-4xl font-semibold">
              Projects at {process.env.companyName}
            </p>
            <p className="mt-3 text-lg dark:text-gray-300 text-gray-700 text-justify">
              At {process.env.companyName}, we take immense pride in the
              projects we undertake and the solutions we deliver. Our portfolio
              reflects our commitment to excellence, innovation, and client
              satisfaction. With a diverse range of projects spanning various
              industries and technological domains, we strive to showcase our
              expertise in custom software development, cloud services, data
              analytics, and more. Explore our work to witness how we leverage
              technology to drive success for our clients.{' '}
            </p>
          </div>
          <div className="col-span-2"></div>
        </div>
        {/* Number Counter */}
        <div className=" py-7 lg:flex justify-center">
          <div className="lg:border-r border-gray-500 px-20 mb-10 lg:mb-0">
            <p className="text-xl font-semibold mb-2">Over 5</p>
            <p>Years of Experience</p>
          </div>
          <div className="lg:border-r border-gray-500 px-20 mb-10 lg:mb-0">
            <p className="text-xl font-semibold mb-2">98%</p>
            <p>Client Satisfaction Rate</p>
          </div>
          <div className="px-20">
            <p className="text-xl font-semibold mb-2">Over 170</p>
            <p>Projects Completed</p>
          </div>
        </div>
        <div className="py-10">
          <div className={`my-10`}>
            <ProjectList />
          </div>
        </div>
      </section>

      <section className=" mx-auto rounded-3xl bg-black text-white">
        <div className="px-10 mx-auto py-20">
          <p className="max-w-2xl text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl lg:col-span-2 xl:col-auto">
            Tell us about your project
          </p>
          <button className="px-3 py-2 my-10 text-black bg-white rounded-lg">
            Leave us a message
          </button>
          <hr className="text-gray-500 mb-10" />
          <p className="font-semibold mb-2">{process.env.companyName}</p>
          <p>
            At {process.env.companyName} we don&apos;t just design digital
            products, we design experiences for people like you, You need the
            right minds that can interpret your ideas and make it a reality we
            are glad you found us.
          </p>
        </div>
      </section>


      <BeforeFooter />
    </main>
  );
}

project.layout = GuestLayout;


/*    <ProjectComponent data={project} /> */
