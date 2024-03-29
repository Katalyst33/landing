import Image from 'next/image';
import { TypewriterEffect } from '../typewriter-effect';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function HomeHero() {
  const words = [
    {
      text: 'Your',
    },
    {
      text: 'Business',
    },
    {
      text: 'needs',
    },
    {
      text: 'the',
    },
    {
      text: 'Katalyst.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <div className="relative isolate overflow-hidden ">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24  sm:pb-32 lg:flex lg:px-8 ">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
          <div>
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-secondary-500/20">
                About Us
              </span>
            </a>
          </div>
          <TypewriterEffect words={words} />

          <p className="mt-6 text-lg leading-8 ">
            By leveraging cutting-edge technologies and industry best practices,
            we empower your business to adapt, evolve, and thrive in an
            ever-changing landscape. Partner with {process.env.companyName}, and
            together, we&apos;ll unlock the full potential of your business.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button
              className={`text-white dark:text-gray-800`}
              variant={`primary`}
              asChild
            >
              <Link
                href={{
                  pathname: '/contact',
                  query: { type: 'meeting' },
                }}
              >
                Book Appointment
              </Link>
            </Button>

            <Button variant={`link`} asChild>
              <Link
                className={`text-gray-600 dark:text-gray-50`}
                href={{
                  pathname: '/services',
                }}
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
          {/* Add typewriter */}
        </div>

        {/*


          */}

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10  lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="/image/hero-team.jpg"
              alt="App screenshot"
              priority={true}
              width={600}
              height={1442}
              className=" h-[700px] w-auto object-contain  rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
