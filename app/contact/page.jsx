import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

export default function about() {
  return (
    <main>
      <section className=" container mx-auto">
        <div className="lg:w-3/6 mb-5">
          <span className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-secondary-500/20">
            Contact us
          </span>
          <p className="title">Let’s Build Something</p>
          <p className="mt-3 text-lg text-gray-700">
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

        <div className="mt-20 lg:mt-0 lg:w-5/12 mx-auto flex flex-col items-center">
          <div className="w-full justify-between items-center">
            <input
              placeholder="Name"
              className="border-b border-black px-3 py-1 w-full mb-5 rounded-md  placeholder:text-gray-400 outline-none"
            />
            <input
              placeholder="Email"
              className="border-b border-black px-3 py-1 w-full mb-5 lg:mb-0 rounded-md placeholder:text-gray-400 outline-none"
            />
          </div>
          <textarea
            className="w-full px-3 py-1 border-b border-black mt-2 lg:mt-5 rounded-md  placeholder:text-gray-400 outline-none"
            placeholder="Message"
            rows={5}
          />
          <div className="w-full flex justify-end mt-8">
            <button className="bg-black text-white px-4 hover:bg-gray-900 py-3 rounded-md shadow-sm">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
