const Footer = () => {
  return (
    <section className="bg-white text-black py-40">
      <div className="lg:flex w-4/5 mx-auto justify-between">
        <div className="flex flex-wrap gap-32">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Work</p>
            <p>Anbe</p>
            <p>Wildstream</p>
            <p>Work</p>
            <p>See all</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Company</p>
            <p>About</p>
            <p>Process</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-2 -mt-14 lg:mt-0">
            <p className="font-semibold">Socials</p>
            <p>Github</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>Dribble</p>
          </div>
        </div>
        <div className="lg:w-2/6 mt-16 lg:mt-0">
          <p className="font-semibold mb-3">Sign up for our newsletter</p>
          <p>
            Subscribe to get the latest design news, articles, resources and
            inspiration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
