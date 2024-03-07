"use client";

import { everyOne } from "../../data/team";
export default function TeamPost({ params }) {
  let selected = {};

  for (const item of everyOne) {
    if (item.slug === params.slug) {
      selected = item;
    }
  }

  const { name, position, summary } = selected;

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-600">
            Professional Summary here
          </h2>
          <h3 className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl">
            {name}
          </h3>
          <p className="mt-2 text-xl font-medium text-gray-600">{position}</p>
          <p className="mt-4 text-lg text-gray-500">{summary}</p>
        </div>
        {/*
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:max-w-none">
                <h3 className="text-3xl font-bold tracking-tight text-indigo-600">
                  Experience
                </h3>
                {experience.map((exp, index) => (
                  <div key={index} className="mt-4">
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <p className="text-lg font-medium text-gray-600">
                      {exp.company} - {exp.location}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      {exp.date}
                    </p>
                    <p className="mt-2 text-lg text-gray-500">
                      {exp.description}
                    </p>
                  </div>
                ))}
                <h3 className="text-3xl font-bold tracking-tight text-indigo-600 mt-8">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="mt-4">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-lg font-medium text-gray-600">
                      {edu.school} - {edu.location}
                    </p>
                    <p className="text-lg font-medium text-gray-600">
                      {edu.date}
                    </p>
                  </div>
                ))}
                <h3 className="text-3xl font-bold tracking-tight text-indigo-600 mt-8">
                  Skills
                </h3>
                <ul className="list-disc list-inside mt-4">
                  {skills.map((skill, index) => (
                    <li key={index} className="text-lg text-gray-500">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        */}
      </div>
    </div>
  );
}
