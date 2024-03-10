"use client";
import BeforeFooter from '../../components/BeforeFooter.jsx';
import React from "react";
import ServiceList from "../../components/service/ServiceList";
import GuestLayout from "../../layouts/guest-layouts";


export default async function service() {


    return (<main>
            <input className={`bg-red-500`} type="text"/>


            <section className="container mx-auto lg:px-10">
                <div className="mb-10  py-10">
            <span
                className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-secondary-500/20">
              Our Services
            </span>
                    <p className="text-4xl font-semibold">
                        Services at {process.env.companyName}
                    </p>
                    <p className="mt-3 text-lg dark:text-gray-300 text-gray-700 text-justify">
                        At {process.env.companyName}, we have a team of experienced and
                        skilled professionals who are dedicated to providing the best
                        services to our clients. We offer a wide range of services to our
                        clients,
                    </p>
                </div>
                <div className="py-10">
                    <div className={`my-10`}>
                        <ServiceList/>
                    </div>
                </div>

            </section>
            <BeforeFooter/>
        </main>
    );

}



service.layout = GuestLayout;
