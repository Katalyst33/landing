const approach = [
  {
    name: 'Branding',

    image:
      'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709165713/business_cfjdaq.png',
  },
  {
    name: 'Software Engineering',

    image:
      'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709165810/software-development_xwce9n.png',
  },
  {
    name: 'Cloud Services',

    image:
      'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709166006/data_o4qiog.png',
  },
  {
    name: 'Digital Marketing',

    image:
      'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709166009/digital-marketing_qgs6hf.png',
  },
];

export default function Example() {
  return (
    <section className="bg-gray-50 py-24 ">
      <div className="w-5/6 mx-auto">
        <p className="font-semibold">Our Approach</p>
        <p className=" text-lg mt-2">
          Since 2015, we have been refining our expertise in design and web
          development here in Nigeria. Throughout this journey, we've come to
          understand that effective web design goes beyond just showcasing your
          business—it's about prioritizing the needs and experiences of your
          customers as well.
        </p>
        <div className="mx-auto mt-10 grid md:grid-cols-2 max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {approach.map((approaches) => (
            <div className="flex gap-4  px-4 justify-items-center">
              <img
                className=" w-10 h-10"
                src={approaches.image}
                alt="Transistor"
                width={1500}
                height={480}
              />
              <p className="mt-4 font-semibold">{approaches.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
