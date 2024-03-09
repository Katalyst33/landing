import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid';
import ServiceList from '../services/ServiceList';


export default function HomeFeature() {
  return (
    <div className=" ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-secondary-500/20">
                Our Services
              </span>
            </a>
          </div>
          <h1 className="title">
            Everything you need to reinvigorate your Business Online
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            With a focus on collaboration, innovation, and excellence, we are
            dedicated to helping you stay ahead in today&rsquo;s competitive
            landscape. Discover how {process.env.companyName} can empower your
            business to thrive in the digital age.
          </p>
        </div>

        {/*error here */}
        <div className={`my-20`}>
          <ServiceList />
        </div>

        {/*error here */}
      </div>
    </div>
  );
}
