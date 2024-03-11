import { truncateString } from '../../utils';
import Link from 'next/link';

import './service.scss';

function ServiceComponent({ data }) {
  const { title, description, slug } = data;

  return (
    <div className="">
      <dl>
        <div key={name} className="flex flex-col">
          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 ">
            <h1 className=" text-xl "> {title}</h1>
          </dt>
          <dd className="mt-4 flex flex-auto flex-col text-base leading-7 ">
            <p className="flex-auto">{truncateString(description, 300)}</p>
            <p className="mt-6">
              <Link
                href={`/services/${slug}`}
                className="text-sm font-semibold leading-6 "
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
