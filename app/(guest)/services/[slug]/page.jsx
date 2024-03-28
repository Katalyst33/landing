import PropTypes from 'prop-types';
async function getData(slug) {
  const res = await fetch(`${process.env.serverUrl}/api/services/${slug}`, {
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
      <main>
        <h1 className={`text-2xl`}>{data.title}</h1>
        <span

            dangerouslySetInnerHTML={{
              __html: data.description || "",
            }}
        />

        <div className={`flex flex-col mt-10`}>
          {
            data.tags.map((tag, index) => {
              return (
                  <span key={index} className={`p-1 text-gray-700 capitalize rounded-full`}>
                            {tag}
                        </span>
              );
            })
          }
        </div>
  
      </main>
  );
}

ProjectPost.propTypes = {
  params: PropTypes.object.isRequired,
};


export const runtime = "experimental-edge"
