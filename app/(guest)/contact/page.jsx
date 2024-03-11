'use client';
import {
    BsDribbble,
    BsFacebook,
    BsInstagram,
    BsLinkedin,
} from 'react-icons/bs';

import ContactForm from './contact.form';
import {useState} from "react";
import {$ClientFetch, $clientFetch, clientFetch, useClientFetch} from "../../config/http";

export default function About() {

    const [errors, setErrors] = useState({});

    async function handleSubmit(formData) {


        try {
            const res = await $ClientFetch(`${process.env.apiUrl}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })


            console.log(res, "error");

        } catch (errors) {
            setErrors(errors.errors);
        }


    }

    return (
        <main>
            <section className=" container mx-auto ">
                <div>
                    <p className="mb-2">Contact us</p>
                    <p className="text-4xl font-semibold">Let’s Build Something</p>
                    <p className="mt-3 text-lg dark:text-gray-300 text-gray-700">
                        Don’t be shy, say hello! Ready to change the world with your project
                        or have questions
                    </p>
                </div>
                <div className={`py-20`}>
                    <div className="grid lg:grid-cols-5 gap-10">
                        <div className={`col-span-3`}>
                            <div className="mb-5">
                                <p className="mb-2 text-lg font-semibold">Contact Us</p>
                                <div className="flex justify-between">
                                    <p>info@katalyst.tech</p>
                                </div>
                            </div>

                            <hr className=""/>

                            <div className="mt-5">
                                <p className="mb-4 text-lg font-semibold">Follow us</p>
                                <div className="flex gap-14 text-2xl">
                                    <BsDribbble/>
                                    <BsLinkedin/>
                                    <BsFacebook/>
                                    <BsInstagram/>
                                </div>
                            </div>
                        </div>
                        <div className={`col-span-2`}>
                            <ContactForm handleSubmit={handleSubmit} errors={errors}/>

                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
