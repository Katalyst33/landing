'use client';
import Image from 'next/image';
import ProjectComponent from './components/projects/ProjectComponent';
import { projectList, services, tools } from './data/content';
import HomeHero from './components/home/HomeHero.jsx';
import HomeFeature from './components/home/HomeFeature.jsx';
import HomeServices from './components/home/HomeServices.jsx';
import TestimonialFeature from './components/TestimonialFeature.jsx';
import BeforeFooter from './components/BeforeFooter.jsx';
import { TypewriterEffect } from './components/typewriter-effect';

export default function Home() {
  const serviceImage = [
    {
      image1:
        'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1697018970/medium-shot-couple-with-laptop_f077br.jpg',
    },
  ];
  const homeImage = [
    {
      homeImage:
        'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1697268006/rear-view-programmer-working-all-night-long_x0yjx4.jpg',
    },
  ];

  return (
    <main className=" ">
      <HomeHero />

      <HomeFeature />

      <section className="py-40 w-11/12 mx-auto">
        <div className="mx-auto ">
          <HomeServices />
          {/*<TestimonialFeature />*/}
        </div>
      </section>
      <BeforeFooter />
    </main>
  );
}
