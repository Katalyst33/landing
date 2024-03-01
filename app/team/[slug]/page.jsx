import { CameraIcon } from '@heroicons/react/20/solid';

// Dummy data
const dummyData = {
  name: "John Doe",
  position: "Senior Front-end Engineer",
  summary: "Experienced Front-end Engineer with a passion for creating responsive and user-friendly web applications. Skilled in HTML, CSS, JavaScript, and React.",
  experience: [
    {
      title: "Lead Front-end Developer",
      company: "Tech Solutions Inc.",
      location: "New York, NY",
      date: "Jan 2018 - Present",
      description: "Managed a team of 5 developers and led the front-end development of multiple projects. Collaborated with designers and backend developers to deliver high-quality web applications."
    },
    {
      title: "Front-end Developer",
      company: "Web Design Co.",
      location: "San Francisco, CA",
      date: "Aug 2015 - Dec 2017",
      description: "Developed responsive and cross-browser compatible websites using HTML, CSS, and JavaScript. Implemented UI/UX designs provided by the design team."
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      date: "2011 - 2015"
    }
  ],
  skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "UI/UX Design"]
};

export default function TeamPost({ params }) {
  // Destructuring dummyData
  const { name, position, summary, experience, education, skills } = dummyData;

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-600">Professional Summary</h2>
          <h3 className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl">{params.slug}</h3>
          <p className="mt-2 text-xl font-medium text-gray-600">{position}</p>
          <p className="mt-4 text-lg text-gray-500">{summary}</p>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:max-w-none">
                <h3 className="text-3xl font-bold tracking-tight text-indigo-600">Experience</h3>
                {experience.map((exp, index) => (
                  <div key={index} className="mt-4">
                    <h4 className="text-xl font-bold">{exp.title}</h4>
                    <p className="text-lg font-medium text-gray-600">{exp.company} - {exp.location}</p>
                    <p className="text-lg font-medium text-gray-600">{exp.date}</p>
                    <p className="mt-2 text-lg text-gray-500">{exp.description}</p>
                  </div>
                ))}
                <h3 className="text-3xl font-bold tracking-tight text-indigo-600 mt-8">Education</h3>
                {education.map((edu, index) => (
                  <div key={index} className="mt-4">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-lg font-medium text-gray-600">{edu.school} - {edu.location}</p>
                    <p className="text-lg font-medium text-gray-600">{edu.date}</p>
                  </div>
                ))}
                <h3 className="text-3xl font-bold tracking-tight text-indigo-600 mt-8">Skills</h3>
                <ul className="list-disc list-inside mt-4">
                  {skills.map((skill, index) => (
                    <li key={index} className="text-lg text-gray-500">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
