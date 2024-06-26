'use client';

import AboutHero from '../../components/about/AboutHero.jsx';
import AboutServices from '../../components/about/AboutServices.jsx';
import AboutApproach from '../../components/about/AboutApproach.jsx';
import AboutImages from '../../components/about/AboutImages.jsx';
import TeamCard from '../../components/about/TeamCard.jsx';
import { useEffect, useState } from 'react';
import { LoadingBlog } from '../../components/LoadingBlog';

export default function about() {
  return (
    <main className="container mx-auto lg:px-10">
      <AboutHero />
      <section className="container mb-10 mx-auto">
        <h2 className="title py-8">Our Team</h2>
        <p className=" text-lg leading-8  pb-4">
          Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in
          neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.
        </p>
        <TeamList />
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 mb-20">
          <div className="mx-auto max-w-2xl lg:mx-0"></div>
          <div
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          ></div>
        </div>
      </section>

      <AboutServices />
      <AboutApproach />
      <AboutImages />
      <section className="dark:bg-gray-950 bg-gray-200  rounded-xl py-20 my-40">
        <div className="w-5/6 mx-auto">
          <p className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto">
            Our Mission
          </p>
          <p className="text-2xl font-semibold mb-4">
            Breath of life for digital Ideas
          </p>
          <p>
            We strongly believe in contributing towards making Nigeria a Digital
            Ocean. Hence our mission is to focus on core process and help
            entrepreneurs in evolving their ideas to reality. Creating strong
            and sustainable employment opportunities is what we look forward to
            focusing to ensure fresh graduates and experienced professionals get
            a platform to experiment and explore their bunch of abilities.
          </p>
        </div>
      </section>
    </main>
  );
}

function TeamList() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch(`${process.env.apiUrl}/team`)
      .then((response) => response.json())
      .then((data) => setTeam(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {team.length > 0 ? (
        <ul className={`grid grid-cols-1 md:grid-cols-2  gap-10 `}>
          {team.map((item, index) => (
            <div key={index}>
              <div>  
                <TeamCard data={item} />
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <LoadingBlog />
      )}
    </div>
  );
}
