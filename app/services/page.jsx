'use client';
import BeforeFooter from '../components/BeforeFooter.jsx';
import ServiceListA from '../components/services/ServiceList.jsx';

export default function work() {
  return (
    <main>
      <section className="container mx-auto lg:px-10">
        <div className="mb-10  py-10">
          <span className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-secondary-500/20">
            Our Services
          </span>
          <p className="text-4xl font-semibold">
            Services at {process.env.companyName}
          </p>
          <p className="mt-3 text-lg text-gray-700 text-justify">
            At {process.env.companyName}, we have a team of experienced and
            skilled professionals who are dedicated to providing the best
            services to our clients. We offer a wide range of services to our
            clients,
          </p>
        </div>
        <div className="col-span-2"></div>
        <ServiceListA />
      </section>

      <BeforeFooter />
    </main>
  );
}
