import Modal from "react-modal";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { deleteContact } from "../../redux/contacts/operations/";

Modal.setAppElement("#root");

export const ContactDeleteModal = ({ isOpen, onClose, contactId }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContact(contactId));
        toast.success("The contact has been successfully delated!", {
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
            <div className="card bg-neutral text-neutral-content w-2xs md:w-sm justify-center items-center">
                <div className="card-body items-center text-center">
                    <h3 className="card-title">
                        Are you sure you want to delete the contact?
                    </h3>
                    <div className="card-actions justify-end">
                        <button onClick={onClose} className="btn btn-outline">
                            Cancel
                        </button>
                        <button
                            onClick={handleDeleteContact}
                            className="btn btn-primary"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
