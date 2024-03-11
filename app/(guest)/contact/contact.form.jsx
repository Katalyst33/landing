import {Label} from '../../components/ui/label';
import {Input} from '../../components/ui/input';
import {Button} from '../../components/ui/button';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import * as z from 'zod';
import ErrorField from '../../components/ui/error-field';
import {Textarea} from '../../components/ui/textarea';


export default function ContactForm({...props}) {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        name: '',
        message: '',
    });

    useEffect(() => {
        setErrors({
            email: props.errors?.email,
            name: props.errors?.name,
            message: props.errors?.message,
        });
    }, [props.errors]);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        // Validate the changed field and update errors state
        const updatedField = {[name]: value};
        const fieldValidationSchema = schema.pick({[name]: true}); // Assuming `schema` is your Zod schema

        fieldValidationSchema.safeParseAsync(updatedField).then((result) => {
            if (result.success) {
                // If the field is valid, remove any existing error for this field
                setErrors((prevErrors) => {
                    const newErrors = {...prevErrors};
                    delete newErrors[name]; // Remove the error for this field
                    return newErrors;
                });
            } else {
                // If the field is invalid, update the error message for this field
                const errorMessage = result.error.errors[0]?.message || 'Invalid input';
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: errorMessage,
                }));
            }
        });
    };
    const schema = z.object({
        name: z.string().min(2, {
            message: 'Name must be at least 2 characters long',
        }),

        email: z.string().email({
            message: 'Invalid email address',
        }),

        message: z
            .string()
            .min(10, {
                message: 'Message must be at least 10 characters.',
            })
            .max(160, {
                message: 'Message must not be longer than 30 characters.',
            }),
    });

    function handleError() {
        const result = schema.safeParse(formData);

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

        if (handleError()) props.handleSubmit(formData);

        // reset form

        setFormData({
            email: '',
            name: '',
            message: '',
        });
    }

    return (
        <div className={`w-full`}>
            <form onSubmit={handleSubmit}>
                <div>
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
                    <div>
                        <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here."
                            />
                            <ErrorField error={errors.message}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mt-8 flex justify-start">
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
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    className: PropTypes.string,
    errors: PropTypes.object,
};



