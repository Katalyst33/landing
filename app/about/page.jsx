import Image from "next/image";
import man1 from "../../public/team1.jpg";
import man2 from "../../public/team1.jpg";
import man3 from "../../public/team1.jpg";
import LinkIcon from "/app/components/icons/LinkIcon";
import Link from "next/link";
import AboutHero from "../components/AboutHero.jsx"
import AboutServices from "../components/AboutServices.jsx"
import AboutApproach from "../components/AboutApproach.jsx"
import AboutImages from "../components/AboutImages.jsx"

export default function about() {
  const teamlist = [
    {
      id: 1,
      image: man1,
      name: "Brian Azukaeme",
      role: "Senior Front-end Engineer",
      slug: "brian-azukaeme",
    },
    {
      id: 2,
      image: man2,
      name: "Chima Peter",
      role: "Mobile App Developer",
      slug: "chima-peter",
    },
    {
      id: 3,
      image: man3,
      name: "Samuel Nmeje",
      role: "Senior Front-end Engineer",
      slug: "samuel-nmeje",
    },
  ];
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
        </div>
      </div>
    );
  };
  return (
    <main className="container mx-auto lg:px-10">
        <AboutHero/>

<AboutServices/>
<AboutApproach/>
<AboutImages/>
      <section className="bg-black text-white rounded-3xl py-20 my-40">
        <div className="w-5/6 mx-auto">
          <p className="max-w-2xl text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl lg:col-span-2 xl:col-auto">Our Mission</p>
          <p className="text-2xl font-semibold mb-4">
            Breathe of life for digital Ideas
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

      <section className="container mb-10 mx-auto">
        <p className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
          Team
        </p>

        <div>
          <div className="grid md:grid-cols-2 gap-x-8 lg:grid-cols-4 px-4 md:px-0">
            {teamlist.map((n) => {
              return <Teamcard key={n.id} {...n} />;
            })}{" "}
          </div>
        </div>
      </section>

     

      <section className=" mx-auto rounded-3xl bg-black text-white">
        <div className="w-4/6 mx-auto py-20">
          <p className="max-w-2xl text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl lg:col-span-2 xl:col-auto">Tell us about your project</p>
          <button className="px-3 py-2 my-10 text-black bg-white rounded-lg">
            Leave us a message
          </button>
          <hr className="text-gray-500 mb-10" />
          <p className="font-semibold mb-2">Katalyst Technologies</p>
          <p>
            At Katalyst Technologies we don't just design digital products, we
            design experiences for people like you, You need the right minds
            that can interpret your ideas and make it a reality we are glad you
            found us.
          </p>
        </div>
      </section>
    </main>
  );
}
