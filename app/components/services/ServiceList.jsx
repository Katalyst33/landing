import React from 'react';
import { useState, useEffect } from 'react';
import ServiceComponent from './ServiceComponent.jsx';
import { LoadingBlog } from '../LoadingBlog.jsx';

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.apiUrl}/services`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setServices(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {services.length > 0 ? (
        <ul className={`grid grid-cols-1 md:grid-cols-2  gap-10 `}>
          {services.map((service, index) => (
            <div key={index}>
              <div>
                <ServiceComponent data={service} />
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

export default ServiceList;
