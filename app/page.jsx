'use client';
import HomeHero from './components/home/HomeHero.jsx';
import HomeFeature from './components/home/HomeFeature.jsx';
import HomeServices from './components/home/HomeServices.jsx';
import TestimonialFeature from './components/TestimonialFeature.jsx';
import BeforeFooter from './components/BeforeFooter.jsx';

export default function Home() {
  return (
    <main className=" ">
      <HomeHero />

      <HomeFeature />

      <section className="py-40 w-11/12 mx-auto">
        <div className="mx-auto ">
          <HomeServices />
          <TestimonialFeature />
        </div>
      </section>
      <BeforeFooter />
    </main>
  );
}
