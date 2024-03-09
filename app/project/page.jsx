'use client';
import BeforeFooter from '../components/BeforeFooter.jsx';
import ProjectList from '../components/projects/ProjectList.jsx';

export default function work() {
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

      <BeforeFooter />
    </main>
  );
}

/*    <ProjectComponent data={project} /> */
