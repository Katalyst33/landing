import Link from 'next/link';

export default function BeforeFooter() {
  return (
    <div className="pb-8">
      <div className="px-6 sm:px-6  lg:px-8">
        <div className="mx-auto max-w-2xl text-center ">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Ready to Revolutionize Your Business?
            <br />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8  dark:text-gray-300 text-gray-700">
            Contact us today to discuss your project and see how we can
            collaborate to achieve your goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/work"
              className="rounded-md bg- px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Projects         
            </Link>
            <Link
              href={{
                pathname: '/contact',
                query: { type: 'contact' },
              }}
              className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
