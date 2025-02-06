import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import Contact from "../Contact/Contact";
import { ContactEditModal } from "../Modals/ContactEditModal";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [currentContact, setCurrentContact] = useState({});

    const openEditModal = (contact) => {
        setEditModalOpen(true);
        setCurrentContact(contact);
    };

    const closeEditeModal = () => {
        setEditModalOpen(false);
        setCurrentContact({});
    };

    return (
        <>
            <ul className="flex flex-wrap gap-12">
                {filteredContacts.map((contact) => (
                    <li
                        className="transition duration-300 ease-in-out hover:shadow-sm hover:shadow-primary hover:scale-105 w-xs"
                        key={contact.id}
                    >
                        <Contact
                            contact={contact}
                            onEditClick={openEditModal}
                        />
                    </li>
                ))}
            </ul>
            {currentContact && (
                <ContactEditModal
                    isOpen={isEditModalOpen}
                    onClose={closeEditeModal}
                    contact={currentContact}
                />
            )}
        </>
    );
};

export default ContactList;
