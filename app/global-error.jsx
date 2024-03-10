'use client';
// GlobalError components must be Client Components

import { useEffect } from 'react';

import PropTypes from 'prop-types';

export default function GlobalError({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error);
  }, [error]);

  return (
      <html>
      <body>
    <div>
      <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 h-screen lg:px-8">
        <p className="text-base font-semibold leading-8 text-blue-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10">
          <a href="#" className="text-sm font-semibold leading-7 text-blue-600">
            <span aria-hidden="true">&larr;</span> Back to home
          </a>
        </div>
      </main>
    </div>
    </body>
    </html>
  );
}

GlobalError.propTypes = {
  error: PropTypes.object,
};
