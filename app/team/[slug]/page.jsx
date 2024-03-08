

async function getData(id) {
  const res = await fetch(`${process.env.serverUrl}/team/${id}`, {
    // cache: 'force-cache',
  });


  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function TeamPost({ params }) {
  const slug = params.slug;

  const data = await getData(slug);

  const { name, position, summary } = data;

  return (
    <main>
      <h1>
        <div className="overflow-hidden bg-white">
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-indigo-600">
                Professional Summary here
              </h2>
              <h3 className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl">
                {name}
              </h3>
              <p className="mt-2 text-xl font-medium text-gray-600">
                {position}
              </p>
              <p className="mt-4 text-lg text-gray-500">{summary}</p>
            </div>
          </div>
        </div>
      </h1>
    </main>
  );
}
