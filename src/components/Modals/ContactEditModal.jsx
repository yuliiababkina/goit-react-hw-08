import { useId } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import toast from "react-hot-toast";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { editContact } from "../../redux/contacts/operations/";

Modal.setAppElement("#root");

export const ContactEditModal = ({ isOpen, onClose, contact }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const dispatch = useDispatch();

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

    const handleEditContact = (values) => {
        const { name, number } = values;
        dispatch(editContact({ id: contact.id, name, number }));
        toast.success("The contact has been successfully edited!", {
            duration: 3000,
        });
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            aria-modal="true"
            className="absolute max-w-1/2 rounded-lg"
            overlayClassName="fixed inset-0 w-screen h-screen flex justify-center items-center bg-neutral-500/25 z-1000"
            shouldCloseOnOverlayClick={true}
        >
            <div className="card bg-neutral text-neutral-content w-2xs md:w-lg justify-center items-center pt-10">
                <div className="card-body justify-center items-center text-center">
                    <Formik
                        initialValues={{ name: "", number: "" }}
                        onSubmit={handleEditContact}
                        validationSchema={FormSchema}
                    >
                        <Form>
                            <div className="flex flex-col gap-4 mb-10">
                                <div className="indicator">
                                    <span className="indicator-item badge">
                                        Required
                                    </span>
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
                                    <span className="indicator-item badge">
                                        Required
                                    </span>
                                    <Field
                                        name="number"
                                        type="tel"
                                        id={numberFieldId}
                                        className="input input-bordered input-primary w-3xs md:w-sm max-w-md mb-1"
                                        placeholder="Number"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="btn btn-outline"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Save
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Modal>
    );
};
