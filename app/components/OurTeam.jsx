import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import LinkIcon from "/app/components/icons/LinkIcon";
import Link from "next/link";
import TeamCard from "./about/TeamCard";

const team = [
  {
    name: "Brian Azukaeme",
    role: "Front-end Engineer",
    imageUrl:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709272923/me2_gm5ssu.jpg",
    location: "Toronto, Canada",
  },
  // More people...
];

export default function OurTeam() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 mb-20">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
          Our Team
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in
          neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
      >
        {team.map((person) => (
          <li key={person.name}>
            <div>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />

              <Link href={`/team/${person.slug}`}>
                <h3 className="mt-6 text-lg font-bold leading-8 tracking-tight text-gray-800">
                  {person.name}
                </h3>
                <LinkIcon size="1em" color="fill-blue-500" />
              </Link>

              <p className="text-base leading-7 text-gray-700">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500">
                {person.location}
              </p>
            </div>

            <div className="flex mt-2 space-x-2">
              <a
                href="https://www.linkedin.com/in/azukaeme-brian-4329b0246/"
                className="text-gray-400 hover:text-gray-500"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/i_amfury"
                className="text-gray-400 hover:text-gray-500"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/MadFury94"
                className="text-gray-400 hover:text-gray-500"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
