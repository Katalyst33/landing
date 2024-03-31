'use client';
import HomeHero from '../components/home/HomeHero.jsx';
import HomeFeature from '../components/home/HomeFeature.jsx';
import HomeServices from '../components/home/HomeServices.jsx';
import TestimonialFeature from '../components/TestimonialFeature.jsx';
import BeforeFooter from '../components/BeforeFooter.jsx';
import {useEffect, useRef} from "react";

export default function Home() {
    return (
        <main className=" ">


            <HomeHero/>

            <HomeFeature/>

            <section className="py-40 w-11/12 mx-auto">
                <div className="mx-auto ">
                    <HomeServices/>
                    <TestimonialFeature/>
                </div>
            </section>
            <BeforeFooter/>
        </main>
    );
}


function GridHero() {

    const lightRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const light = lightRef.current;
        const grid = gridRef.current;

        const handleMouseMove = (e) => {
            light.style.left = `${e.clientX}px`;
            light.style.top = `${e.clientY}px`;
        };

        grid.addEventListener('mousemove', handleMouseMove);

        // Clean up function to remove the event listener when the component unmounts
        return () => {
            grid.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={`container-grid h-[400px] `}>
            <header id={`hex-grid`}>
                <div ref={lightRef} className={`light`}></div>
                <div ref={gridRef} className={`grid`}></div>
            </header>
        </div>
    )
}