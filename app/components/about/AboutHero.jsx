'use client';

import Image from 'next/image';

export default function AboutHero() {
  return (
    <div >
      {/* Header */}
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/50 dark:bg-gradient-to-b dark:from-indigo-100/5">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 "
            aria-hidden="true"
          />
          <div className="mx-auto px-6">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <div>
                <h1 className="title pb-8">Innovating Beyond Boundaries</h1>
                <Image
                  width={500}
                  priority={true}
                  height={500}
                  src="/image/about/about-hero.jpg"
                  alt=""
                  className="mt-10 aspect-[6/5] w-auto h-auto max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                />
              </div>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-justify ">
                  At {process.env.companyName}, we believe in pushing the
                  boundaries of innovation to drive transformative change. With
                  a relentless commitment to excellence, we combine cutting-edge
                  technology with unparalleled expertise to deliver solutions
                  that revolutionize industries and empower businesses. Our
                  journey is defined by a passion for innovation, a dedication
                  to our clients&apos; success, and a vision to shape a future
                  where possibilities are limitless. Join us on this journey as
                  we continue to redefine what&apos;s possible in the world of
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
