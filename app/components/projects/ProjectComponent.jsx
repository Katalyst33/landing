'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import {truncateString} from '../../utils';
import Link from 'next/link';
import {ExternalLink} from 'lucide-react';

import './project.scss';

function ProjectComponent({data}) {


    const {logo, title, description, year, slug, projectUrl} = data;

    return (
        <div>
            <main className="rounded-lg border dark:border-gray-700 border-gray-100 shadow lg:mb-0 ">
                <div>
                    <Image
                        className="h-20  p-4 w-auto object-contain"
                        src={`${process.env.serverUrl}/${logo}`}
                        alt="logo"
                        width={160}
                        height={40}
                        priority={true}
                    />
                </div>
                <div className="p-4">
                    <p className="font-semibold text-lg">{title}</p>
                    <p className={`text-xs p-1 rounded-full inline`}>
                        <span className=""> Completed:</span>
                        <span className=""> {year}</span>
                    </p>
                </div>

                <div className="text-justify p-1">
          <span

              dangerouslySetInnerHTML={{
                  __html: truncateString(description, 300) || "",
              }}
          />
                </div>

                <footer className={` p-2 space-y-1`}>
                    <div className="flex justify-between  ">
                        <p className="font-semibold text-sm mt-4 ">
                            <Link href={`/project/${slug}`}>About Project</Link>
                        </p>
                        <div className={``}>

                            {
                                projectUrl && <a
                                    href={projectUrl}
                                    className="font-semibold flex items-center gap-x-4 text-sm mt-4 italic"
                                >
                                    Visit Url
                                    <ExternalLink width={15}/>
                                </a>
                            }

                        </div>
                    </div>

                    {/*<p className="font-semibold text-sm  italic"> {tags}</p>*/}
                </footer>
            </main>
        </div>
    );
}

ProjectComponent.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        year: PropTypes.string,
        slug: PropTypes.string.isRequired,
        projectUrl: PropTypes.string,
        logo: PropTypes.string,
    }).isRequired,
};
export default ProjectComponent;
