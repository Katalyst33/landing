import {Label} from '../../components/ui/label';
import {Input} from '../../components/ui/input';
import {Button} from '../../components/ui/button';
import {useState} from 'react';
import PropTypes from 'prop-types';

import * as z from 'zod';
import ErrorField from "../../components/ui/error-field";

export default function ContactForm({...props}) {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        name: '',

    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        // Validate the changed field and update errors state
    };

    const schema = z.object({
        name: z.string().min(2, {
            message: 'Name must be at least 2 characters long',
        }),

        email: z.string().email({
            message: 'Invalid email address',
        }),
    });

    function handleError() {
        const result = schema.safeParse(formData);

        console.log(result);
        if (!result.success) {
            const formattedErrors = {};
            result.error.errors.forEach((error) => {
                const fieldName = error.path[0];
                formattedErrors[fieldName] = error.message;
            });
            setErrors(formattedErrors);


            const firstError = Object.keys(formattedErrors)[0];

            const element = document.getElementById('contact-' + firstError);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                    block: 'center',
                });
            }

            return;
        } else {
            setErrors({});
            return true;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();


        handleError();

        // if (handleError()) props.handleSubmit(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mt-20 ">
                    <div className="">

                        <div>
                            <Label htmlFor="email">Full Name</Label>
                            <Input
                                type="text"
                                placeholder="What can we call you ?"
                                id="conatct-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full"
                            />
                            <ErrorField error={errors.name}/>
                        </div>
                        <div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    id="app-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full"
                                />
                                <ErrorField error={errors.email}/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end mt-8">
                        <div className="mt-8 flex justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-80 text-white "
                                type="submit"
                            >
                                Submit Application
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    className: PropTypes.string,
    errors: PropTypes.object,
};
