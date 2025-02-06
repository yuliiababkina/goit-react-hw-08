import { useState } from "react";

import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { ContactDeleteModal } from "../Modals/ContactDeleteModal";

const Contact = ({ contact: { id, name, number }, onEditClick }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <>
            <div className="card bg-base-100 w-xs md:w-xs max-w-md shadow-xl p-6">
                <div className="card-body items-center text-center flex flex-row justify-between p-0 w-full">
                    <ul>
                        <li className="flex gap-4 mb-2">
                            <FaUser size={20} />
                            <p className="card-title text-md"> {name}</p>
                        </li>
                        <li className="flex gap-4">
                            <FaPhoneAlt size={20} />{" "}
                            <p className="card-title text-base font-thin">
                                {number}
                            </p>
                        </li>
                    </ul>
                    <div className="card-actions">
                        <MdEdit
                            className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
                            size={30}
                            onClick={() => onEditClick({ id, name, number })}
                        />
                        <MdDelete
                            className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
                            size={30}
                            onClick={openDeleteModal}
                        />
                    </div>
                </div>
            </div>
            <ContactDeleteModal
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
                contactId={id}
            />
        </>
    );
};

export default Contact;
