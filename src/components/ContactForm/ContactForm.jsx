import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

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
            <Form className={s.contactForm}>
                <div className={s.inputBox}>
                    <label htmlFor="nameFieldId" className={s.formLabel}>
                        Name
                    </label>
                    <Field
                        type="text"
                        name="name"
                        id={nameFieldId}
                        className={s.formInput}
                        autoComplete="off"
                    />
                    <ErrorMessage
                        name="name"
                        className={s.formError}
                        component="span"
                    />
                </div>
                <div className={s.inputBox}>
                    <label htmlFor="numberFieldId" className={s.formLabel}>
                        Number
                    </label>
                    <Field
                        type="tel"
                        name="number"
                        placeholder="000-00-00"
                        id={numberFieldId}
                        className={s.formInput}
                        autoComplete="off"
                    />
                    <ErrorMessage
                        name="number"
                        className={s.formError}
                        component="span"
                    />
                </div>
                <button type="submit" className={s.formBtn}>
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
