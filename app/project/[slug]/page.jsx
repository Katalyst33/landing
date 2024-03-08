import PropTypes from 'prop-types';
async function getData(id) {
  const res = await fetch(`${process.env.serverUrl}/projects/${id}`, {
    // cache: 'force-cache',
  });

  if (!res.ok) {
    // This will activate the closest `error.jsx` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ProjectPost({ params }) {
  const slug = params.slug;
  const data = await getData(slug);

  return (
    <main>
      <h1>{JSON.stringify(data)}</h1>
    </main>
  );
}

ProjectPost.propTypes = {
    params: PropTypes.object.isRequired,
};
