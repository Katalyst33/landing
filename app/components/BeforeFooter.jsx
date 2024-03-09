import Link from 'next/link';

export default function BeforeFooter() {
  return (
    <div className="pb-8">
      <div className="px-6 sm:px-6  lg:px-8">
        <div className="mx-auto max-w-2xl text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Ready to Revolutionize Your Business?
            <br />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-700">
            Contact us today to discuss your project and see how we can
            collaborate to achieve your goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/work" className="button">
              View Projects
            </Link>
            <Link
              href={{
                pathname: '/contact',
                query: { type: 'contact' },
              }}
              className="sub-button"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
