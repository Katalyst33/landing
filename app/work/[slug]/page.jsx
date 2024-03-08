import { useParams } from 'next/navigation';

async function getData() {
  const res = await fetch(`${process.env.serverUrl}/projects/1`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ProjectPost({ params }) {
  const data = await getData();

  return (
    <main>
      <h1>
        {JSON.stringify(data)}
        One Work !!!
      </h1>
    </main>
  );
}
