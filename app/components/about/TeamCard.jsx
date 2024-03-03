import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

function TeamCard(props) {
  return (
    <div className=" ">
      <div className="relative mb-12 lg:mb-0">
        <Link href={`/team/${props.data.slug}`}>
          <Image
            src={props.data.image}
            alt="Picture or Brian Azukaeme"
            className=" rounded-lg"
            priority={true}
          />

          <h3 className="mt-6 text-lg font-bold leading-8 tracking-tight text-gray-800">
            {props.data.name}
          </h3>
        </Link>
        <p className="text-base leading-7 text-gray-700">{props.data.role}</p>
        <p className="text-sm leading-6 text-gray-500">{props.data.location}</p>
        <div className="flex gap-x-2 mt-2 ">
          {props.data.socials.map((social, index) => (
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
      </div>
    </div>
  );
}

TeamCard.propTypes = {};

export default TeamCard;
