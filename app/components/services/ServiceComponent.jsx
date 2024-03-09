'use client';

import { truncateString } from '../../utils';
import Link from 'next/link';

import './service.scss';

function ServiceComponent({ data }) {
  const { name, description, href } = data;

  return (
    <div className="">
      <dl>
        <div key={name} className="flex flex-col">
          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
            <h1 className=" text-xl text-gray-900"> {name}</h1>
          </dt>
          <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p className="flex-auto">{truncateString(description, 300)}</p>
            <p className="mt-6">
              <Link
                href={href}
                className="text-sm font-semibold leading-6 text-gray-700"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </p>
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default ServiceComponent;
