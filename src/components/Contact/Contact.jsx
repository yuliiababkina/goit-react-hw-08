import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { id, name, number } }) => {
    const dispatch = useDispatch();
    return (
        <div className={s.contactCard}>
            <ul>
                <li className={s.contactCardItem}>
                    <FaUser />
                    <p> {name}</p>
                </li>
                <li className={s.contactCardItem}>
                    <FaPhoneAlt /> <p>{number}</p>
                </li>
            </ul>
            <button
                className={s.delateBtn}
                type="button"
                onClick={() => {
                    dispatch(deleteContact(id));
                }}
            >
                Delate
            </button>
        </div>
    );
};

export default Contact;
