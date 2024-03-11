'use client';
import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

import ContactForm from './contact.form';

export default function About() {
  function handleSubmit(formData) {
    console.log(formData);

    // send data to server

    fetch(`${process.env.apiUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });

    console.log(formData);
  }

  return (
    <main>
      <section className=" container mx-auto">
        <div className="lg:w-3/6">
          <p className="mb-2">Contact us</p>
          <p className="text-4xl font-semibold">Let’s Build Something</p>
          <p className="mt-3 text-lg dark:text-gray-300 text-gray-700">
            Don’t be shy, say hello! Ready to change the world with your project
            or have questions
          </p>
        </div>
      </section>

      <section className="mt-40 mx-auto w-11/12 lg:flex justify-between">
        <div className="lg:w-5/12">
          <div className="mb-5">
            <p className="mb-2 text-lg font-semibold">Contact Us</p>
            <div className="flex justify-between">
              <p>info@katalyst.tech</p>
            </div>
          </div>

          <hr className="" />

          <div className="mt-5">
            <p className="mb-4 text-lg font-semibold">Follow us</p>
            <div className="flex gap-14 text-2xl">
              <BsDribbble />
              <BsLinkedin />
              <BsFacebook />
              <BsInstagram />
            </div>
          </div>
        </div>
        <ContactForm handleSubmit={handleSubmit} />
      </section>
    </main>
  );
}
