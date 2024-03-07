'use client';
import Image from 'next/image';
import {} from '../../public/team1.jpg';
import ProjectComponent from '../components/ProjectComponent';
import { projectList } from '../data/content';
import BeforeFooter from '../components/BeforeFooter.jsx';

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function about() {
  return (
    <main>
      <section className="container mx-auto">
        <div>
          <div className="container px-6">
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
      </section>

      <div className="mt-8 px-10">
        Project Component
        <ProjectList data={projectList} />
      </div>
      <BeforeFooter />
    </main>
  );
}

function ProjectList(props) {
  const allProjects = props.data;

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

  console.log(projects);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 ">
        {allProjects.map((project, index) => (
          <div key={index}>
            <div>{project.logo}</div>
            <main className="rounded-lg border border-gray-300 p-8 mb-8 lg:mb-0">
              <div className="relative w-28 h-32">
                <Image
                  className="h-20 w-auto object-contain"
                  src={project.logo}
                  alt="logo"
                  width={160}
                  height={20}
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
              <p className="text-justify">{project.description}</p>
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
      </div>
    </div>
  );
}
/*    <ProjectComponent data={project} /> */

ProjectList.propTypes = {
  data: PropTypes.array.isRequired,
};
