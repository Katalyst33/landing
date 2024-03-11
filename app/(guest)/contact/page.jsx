"use client";
import {
    BsDribbble,
    BsFacebook,
    BsInstagram,
    BsLinkedin,
} from 'react-icons/bs';
import {useState} from "react";
import {Button} from "../../components/ui/button";

export default function About() {
    const [formData, setFormData] = useState({

        email: "",

    });
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        // Validate the changed field and update errors state

    };



    function handleSubmit(e) {
        e.preventDefault();

        // send data to server

        fetch(`${process.env.apiUrl}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(r => r.json()).then(data => {
            console.log(data)
        })


        console.log(formData)
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

                <form onSubmit={handleSubmit}>

                    <div className="mt-20 lg:mt-0 lg:w-5/12 mx-auto flex flex-col items-center">
                        <div className="w-full justify-between items-center">
                            {/*       <input
                            placeholder="Name"
                            className="border-b border-black px-3 py-1 w-full mb-5 rounded-md  placeholder:text-gray-400 outline-none"
                        />
*/}

                            <div>
                                {/*<Label>Email Address</Label>*/}
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        id="app-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border-b border-black px-3 py-1 w-full mb-5 lg:mb-0 rounded-md placeholder:text-gray-400 outline-none"
                                    />
                                    {/*<ErrorField error={errors.email} />*/}
                                </div>
                            </div>
                        </div>
                        {/*   <textarea
                        className="w-full px-3 py-1 border-b border-black mt-2 lg:mt-5 rounded-md  placeholder:text-gray-400 outline-none"
                        placeholder="Message"
                        rows={5}
                    />*/}
                        <div className="w-full flex justify-end mt-8">


                            <div className="mt-8 flex justify-center">
                                <Button variant="primary" size="lg" className="w-80 text-white " type="submit">
                                    Submit Application
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>

            </section>

        </main>

    );
}
