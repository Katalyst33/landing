import Image from 'next/image';

const ProjectComponent = (props) => {
  return (
    <main className="rounded-lg border border-gray-300 p-8 mb-8 lg:mb-0">
      <div className="relative w-28 h-32">
        <Image
          className="h-20 w-auto object-contain"
          src={props.logo}
          alt="logo"
          width={160}
          height={20}
          priority={true}
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">{props.title}</p>
        <p>
          <span className=""> Completed:</span>
          <span className=""> {props.year}</span>
        </p>
      </div>
      <p className="text-justify">{props.description}</p>
      <div className="flex justify-between">
        <p className="font-semibold text-sm mt-4 italic"> {props.tech}</p>
        <a
          href={props.projectUrl}
          className="font-semibold text-sm mt-4 italic text-blue-500"
        >
          Visit Url
        </a>
      </div>
    </main>
  );
};

export default ProjectComponent;
