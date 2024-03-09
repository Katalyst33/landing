'use client';
import BeforeFooter from '../components/BeforeFooter.jsx';
import ServiceList from '../components/services/ServiceList.jsx';
import Image from 'next/image';

export default function work() {
  return (
    <main>
      <section className="container mx-auto lg:px-10 ">
        <div className=" py-10">
          <div className="mx-auto  ">
            <span className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-secondary-500/20">
              Our Services
            </span>

            <p className="title">Services at {process.env.companyName}</p>
            <p className="mt-3 text-lg text-gray-700 text-justify">
              At {process.env.companyName}, we have a team of experienced and
              skilled professionals who are dedicated to providing the best
              services to our clients. We offer a wide range of services to our
              clients,
            </p>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                width={500}
                priority={true}
                height={500}
                src="/image/services/service.jpg"
                alt=""
                className=" "
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-blue-100 pt-[7%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 "></div>
        <ServiceList />
      </section>
      <div className="py-10 mt-10">
        <BeforeFooter />
      </div>
    </main>
  );
}
