"use client";
import Link from "next/link";
import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import Image from "next/image";
import {useState} from "react";
import {z} from "zod";
import {$ClientFetch} from "../../config/http";


export default function Login() {


    const schema = z.object({
        email: z.string().email({
            message: "Invalid email address eg example",
        }),
        password: z.string().min(8, {
            message: "Password must be at least 8 characters long",
        }),
    });

    const [formData, setFormData] = useState({
        email: "",
        password: "12345678",
    });

    const [errors, setErrors] = useState({});

    console.log(errors);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = schema.safeParse(formData);

        if (!result.success) {
            const formattedErrors = {};
            result.error.errors.forEach((error) => {
                const fieldName = error.path[0];
                formattedErrors[fieldName] = error.message;
            });
            setErrors(formattedErrors);
            return;
        }
        // Handle successful form submission
        $ClientFetch(`${process.env.apiUrl}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        )
            .then((response) => {
                // localStorage.setItem("auth-token", response.data.token);

                // return response;
                console.log(response);
            })

            .catch((error) => {
                return error;
            });
    };
    return (<>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image

                    width={100}
                    height={100}
                    className="mx-auto h-10 w-auto"
                    src="/logos/katalyst-logo.svg"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {JSON.stringify(formData)}
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <Input
                                onChange={handleChange}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Input
                                onChange={handleChange}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            variant={'primary'}
                            className={'w-full'}
                        >
                            Login
                        </Button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Dont have an Account ?{' '}
                    <Link href="/contact" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Contact Us
                    </Link>
                </p>
            </div>
        </div>
    </>)
}
