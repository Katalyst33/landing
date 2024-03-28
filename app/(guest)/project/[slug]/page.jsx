import PropTypes from 'prop-types';
import Image from "next/image";
import {ExternalLink} from "lucide-react";
async function getData(slug) {
  const res = await fetch(`${process.env.serverUrl}/api/projects/${slug}`, {
    // cache: 'force-cache',
  });

  if (!res.ok) {
    // This will activate the closest `global-error.jsx` GlobalError Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ProjectPost({ params }) {
  const slug = params.slug;
  const data = await getData(slug);

  return (
      <main className={`pb-10`}>
        <div className={`grid grid-cols-3`}>
          <div className={`col-span-2`}>
            <div>
              <h1 className={`text-2xl`}>{data.title}</h1>
              <span

                  dangerouslySetInnerHTML={{
                    __html: data.description || "",
                  }}
              />
            </div>

            <div className={`flex flex-col mt-10`}>
              {
                data.tags.map((tag, index)  => {
                    return (
                        <span key={index} className={`p-1 text-gray-700 capitalize rounded-full`}>
                            {tag}
                        </span>
                    );
                })
              }
            </div>
          </div>
          <div>
            <Image
                className="p-4 w-auto object-contain"
                src={`${process.env.serverUrl}/${data.logo}`}
                alt="logo"
                width={160}
                height={40}
                priority={true}
            />
            <p className={` p-1 rounded-full inline`}>
              <span className=""> Completed:</span>
              <span className=""> {data.year}</span>
            </p>

            <div className="flex justify-between  ">
           
              <div className={``}>

                {
                    data.projectUrl && <a
                        href={data.projectUrl}
                        className="font-semibold underline flex items-center gap-x-4 text-sm mt-4 italic"
                    >
                      {data.projectUrl}
                      <ExternalLink width={15}/>
                    </a>
                }

              </div>
            </div>
          </div>
        </div>

     
      </main>
  );
}

ProjectPost.propTypes = {
  params: PropTypes.object.isRequired,
};


export const runtime = "experimental-edge"
