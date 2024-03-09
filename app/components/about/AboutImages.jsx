import Image from "next/image";

export default function AboutImages() {
  return (
    <div className="">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6   lg:px-8 ">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Driving Digital Transformation
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                From innovative software solutions to cutting-edge digital
                strategies, we are dedicated to guiding organizations through
                their digital journey and empowering them to thrive in the
                digital era. Join us as we shape the future of business through
                digital innovation and transformation.
              </p>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"></div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image
                    width={200}
                    height={200}
                    src={`/image/about/young-man-working.jpg`}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    width={200}
                    height={200}
                    src={`/image/about/desktop.jpg`}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Image
                    src={`/image/about/young-man-working-night.jpg`}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    width={200}
                    height={200}
                    src={`/image/about/woman-office.avif`}
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
