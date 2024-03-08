'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import {truncateString} from "../utils/index";
import Link from "next/link";
import {ExternalLink} from "lucide-react";

function ProjectComponent({ data }) {

  const {logo, title, description, year, slug, projectUrl }   = data

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
            <p className={`text-green-500 text-xs bg-green-100 p-1 my-2 rounded-full inline px-1`}>
              <span className=""> Completed:</span>
              <span className=""> {year}</span>
            </p>
          </div>
          <p className="text-justify p-4">
            {truncateString(description, 300)}
          </p>
          <div className="flex justify-between">
            <p className="font-semibold text-sm mt-4 ">
              <Link href={`/project/${slug}`}>
                {' '}
                About Project
              </Link>
            </p>
            <div className={``}>
              <a
                  href={projectUrl}
                  className="font-semibold flex items-center gap-x-4 text-sm mt-4 italic text-blue-500"
              >
                Visit Url
                <ExternalLink />
              </a>
            </div>
          </div>
          <footer className={` flex justify-between border-t mt-4 `}>
             <div>here</div>
             <div>here</div>

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
