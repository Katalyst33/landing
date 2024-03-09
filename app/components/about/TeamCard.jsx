import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import PropTypes from 'prop-types';

function TeamCard({ data }) {
  const { id, image, name, position, summary, socials } = data;

  return (
    <div className=" ">
      <div className="relative mb-12 lg:mb-0">
        <Link href={`/team/${id}`}>
          <Image
            src={`/image${image}`}
            height={200}
            width={200}
            alt="Picture or Brian Azukaeme"
            className="w-auto h-auto rounded-lg"
            priority={true}
          />

          <h3 className="mt-6 text-lg font-bold leading-8 tracking-tight text-gray-800">
            {name}
          </h3>
        </Link>
        <p className="text-base leading-7 text-gray-700">{position}</p>
        <p className="text-sm leading-6 text-gray-500">{summary}</p>
        {socials && (
          <div className="flex gap-x-2 mt-2 ">
            {socials.map((social, index) => (
              <a
                className="bg-gray-500 text-gray-400 hover:text-gray-500"
                href={social.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    summary: PropTypes.string,
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
  }),
};

export default TeamCard;
