import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Innovation",
    description:
      "We thrive on pushing the boundaries of what is possible, constantly seeking new ideas and solutions to drive progress",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709160593/idea_eiftoc.png",
  },
  {
    name: "integrity",
    description:
      "We uphold the highest standards of ethics and integrity in all our interactions, earning the trust and respect of our clients and partners.",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709160893/trust_qavbxk.png",
  },
  {
    name: "Collaboration",
    description:
      "We believe in the power of teamwork and collaboration, fostering an environment where diverse perspectives come together to achieve shared goals.",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709160948/teamwork_1_lpijzh.png",
  },
  {
    name: "Excellence:",
    description:
      "We are committed to delivering excellence in everything we do, striving for perfection and continuous improvement in our work.",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709160985/excellent_rgyyde.png",
  },
];

export default function AboutServices() {
  return (
    <div className="py-10 ">
      <div className=" ">
        <div className="px-6">
          <p className="title">Exploring Our Core Values</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Katalyst Technologies, our foundation is built upon a set of core
            values that guide everything we do. These values serve as the
            cornerstone of our culture and drive our actions every day. Explore
            below to learn more about the principles that define us and shape
            our approach to business:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-white object-cover shadow-2xl"
                      src={feature.image}
                      alt=""
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
