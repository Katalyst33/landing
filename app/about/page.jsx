'use client';
import Image from 'next/image';
import man1 from '../../public/team1.jpg';
import man2 from '../../public/team1.jpg';
import man3 from '../../public/team1.jpg';
import LinkIcon from '/app/components/icons/LinkIcon';
import Link from 'next/link';
import AboutHero from '../components/about/AboutHero.jsx';
import AboutServices from '../components/about/AboutServices.jsx';
import AboutApproach from '../components/about/AboutApproach.jsx';
import AboutImages from '../components/about/AboutImages.jsx';
import TeamCard from '../components/about/TeamCard.jsx';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { LoadingBlog } from '../components/LoadingBlog';

export default function about() {
  return (
    <main className="container mx-auto lg:px-10">
      {/*

      */}
      <AboutHero />
      <section className="container mb-10 mx-auto">
        <h2 className="title py-8">Our Team</h2>
        <p className=" text-lg leading-8 text-gray-600 pb-4">
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

      {/*   <AboutServices />*/}
      {/*      <AboutApproach />*/}
      <AboutImages />
      <section className="bg-black text-white rounded-3xl py-20 my-40">
        <div className="w-5/6 mx-auto">
          <p className="max-w-2xl text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl lg:col-span-2 xl:col-auto">
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

      <hr className="my-10 text-gray-700  mx-auto" />

      <section className=" mx-auto rounded-3xl bg-black text-white">
        <div className="px-10 mx-auto py-20">
          <p className="max-w-2xl text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl lg:col-span-2 xl:col-auto">
            Tell us about your project
          </p>
          <button className="px-3 py-2 my-10 text-black bg-white rounded-lg">
            Leave us a message
          </button>
          <hr className="text-gray-500 mb-10" />
          <p className="font-semibold mb-2">{process.env.companyName}</p>
          <p>
            At {process.env.companyName} we don't just design digital products,
            we design experiences for people like you, You need the right minds
            that can interpret your ideas and make it a reality we are glad you
            found us.
          </p>
        </div>
      </section>
    </main>
  );
}

function TeamList() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.serverUrl}/team`); // Replace with your API endpoint
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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

/*

  const Teamcard = (props) => {
    return (
      <div className="relative mb-12 lg:mb-0">
        <Image
          src={props.image}
          alt="Picture or Brian Azukaeme"
          className=" rounded-lg "
          priority={true}
        />
        <div className="absolute bottom-6 text-white left-4">
          <div className="flex items-center gap-x-2">
            <Link href={`/team/${props.slug}`}>
              <p>{props.name}</p>
            </Link>
            <LinkIcon size="1em" color="fill-blue-500" />
          </div>
          <p>{props.role}</p>
          <div className="flex gap-x-2 mt-2 ">
            {props.socials.map((social, index) => (
              <a
                className=""
                href={social.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
*
* */
