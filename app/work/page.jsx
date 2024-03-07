'use client';
import Image from 'next/image';
import { projectList } from '../data/content';
import BeforeFooter from '../components/BeforeFooter.jsx';

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { LoadingBlog } from '../components/LoadingBlog.jsx';
import {truncateString} from "../utils/index";

export default function about() {
  return (
    <main>
      <section className="container mx-auto lg:px-10">
        <div>
          <div>
            <span className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-secondary-500/20">
              Our Work
            </span>
            <p className="text-4xl font-semibold">
              Projects we {process.env.companyName}
            </p>
            <p className="mt-3 text-lg text-gray-700 text-justify">
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
        <div className="mt-2 lg:flex justify-center">
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
        <div className="py-20 ">
          <ProjectList data={projectList} />
        </div>
      </section>


      <BeforeFooter />
    </main>
  );
}

function ProjectList() {

  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.serverUrl}/projects`); // Replace with your API endpoint
        const data = await response.json();
        setProjects(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (

      <div >

        {projects.length > 0 ? (
            <ul className={`grid grid-cols-3 gap-10 `}>
              {projects.map((project, index) => (

                <div key={index}>
              <main className="rounded-lg border border-gray-100 shadow p-4 lg:mb-0 lg:h-[400px] ">
                <div>
                  <Image
                      className="h-20 py-2 w-auto object-contain"
                      src={project.logo}
                      alt="logo"
                      width={160}
                      height={40}
                      priority={true}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-lg">{project.title}</p>
                  <p>
                    <span className=""> Completed:</span>
                    <span className=""> {project.year}</span>
                  </p>
                </div>
                <p className="text-justify">{ truncateString (project.description, 300)}</p>
                <div className="flex justify-between">
                  <p className="font-semibold text-sm mt-4 italic">
                    {' '}
                    {project.tech}
                  </p>
                  <a
                      href={project.projectUrl}
                      className="font-semibold text-sm mt-4 italic text-blue-500"
                  >
                    Visit Url
                  </a>
                </div>
              </main>
            </div>
              ))}
            </ul>
        ) : (
            <LoadingBlog />
        )}
      </div>

  );
}

/*    <ProjectComponent data={project} /> */

ProjectList.propTypes = {
  data: PropTypes.array.isRequired,
};
