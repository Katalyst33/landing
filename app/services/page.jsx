'use client';
import BeforeFooter from '../components/BeforeFooter.jsx';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { LoadingBlog } from '../components/LoadingBlog.jsx';
import ServiceComponent from '../components/services/ServiceComponent.jsx';

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
        {/* Number Counter */}

        <ServiceList className="py-10" />
      </section>

      <BeforeFooter />
    </main>
  );
}

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.serverUrl}/services`)
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {services.length > 0 ? (
        <ul className={`grid grid-cols-1 md:grid-cols-2  gap-10 `}>
          {services.map((project, index) => (
            <div key={index}>
              <div>
                <ServiceComponent data={project} />
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <LoadingBlog />
      )}
    </div>
  );
}

/*    <ProjectComponent data={project} /> */
