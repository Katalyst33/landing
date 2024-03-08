'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import {truncateString} from "../../utils";
import Link from "next/link";
import {ExternalLink} from "lucide-react";

import "./project.scss"

function ProjectComponent({ data }) {

  const {logo, title, description, year, id, projectUrl , tech}   = data

  return (
      <div>
        <main className="rounded-lg border border-gray-100 shadow lg:mb-0 ">
          <div>
            <Image
                className="h-20  p-4 w-auto object-contain"
                src={logo}
                alt="logo"
                width={160}
                height={40}
                priority={true}
            />
          </div>
          <div className="p-4">
            <p className="font-semibold text-lg">{title}</p>
            <p className={`text-green-500 text-xs bg-green-100 p-1 rounded-full inline px-1`}>
              <span className=""> Completed:</span>
              <span className=""> {year}</span>
            </p>
          </div>
          <p className="text-justify px-4">
            {truncateString(description, 300)}
          </p>

          <footer className={`border-t p-2 space-y-1`}>
            <div className="flex justify-between  ">
              <p className="font-semibold text-sm mt-4 ">
                <Link href={`/project/${id}`}>
                  {' '}
                  About Project
                  {

                  }
                </Link>
              </p>
              <div className={``}>
                <a
                    href={projectUrl}
                    className="font-semibold flex items-center gap-x-4 text-sm mt-4 italic"
                >
                  Visit Url
                  <ExternalLink width={15}  />
                </a>
              </div>
            </div>

            <p className="font-semibold text-sm  italic"> {tech}</p>


          </footer>
        </main>
      </div>
  )
}

ProjectComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // ... define other properties that you expect to receive in the `data` object
  }).isRequired,
};
export default ProjectComponent;
