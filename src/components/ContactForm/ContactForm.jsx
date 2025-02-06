import { useId } from "react";
import { useDispatch } from "react-redux";

import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const dispatch = useDispatch();

    const handleAddContact = (values, actions) => {
        const newContact = {
            name: values.name,
            number: values.number,
        };

        dispatch(addContact(newContact));
        toast.success("The contact has been successfully added!", {
            duration: 3000,
        });
        actions.resetForm();
    };

    const FormSchema = Yup.object().shape({
        name: Yup.string()
            .trim()
            .min(3, "Too short")
            .max(50, "Too long")
            .required("Required"),
        number: Yup.string()
            .trim()
            .length(9, "The phone number must consist of 7 digits")
            .required("Required"),
    });

    return (
        <Formik
            initialValues={{ name: "", number: "" }}
            onSubmit={handleAddContact}
            validationSchema={FormSchema}
        >
            <Form>
                <div className="flex flex-col gap-4 mb-10">
                    <div className="indicator">
                        <span className="indicator-item badge">Required</span>
                        <Field
                            name="name"
                            type="text"
                            className="input input-bordered input-primary w-3xs md:w-sm max-w-md mb-1"
                            placeholder="Name"
                            id={nameFieldId}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="indicator">
                        <span className="indicator-item badge">Required</span>
                        <Field
                            type="tel"
                            name="number"
                            id={numberFieldId}
                            className="input input-bordered input-primary w-3xs md:w-sm max-w-md mb-1"
                            placeholder="Number"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                <div className="form-control">
                    <button
                        type="submit"
                        className="btn btn-primary w-3xs md:w-sm max-w-md"
                    >
                        Add contact
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

export default ContactForm;
