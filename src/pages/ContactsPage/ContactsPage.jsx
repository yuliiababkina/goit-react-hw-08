import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

import { fetchContacts } from "../../redux/contacts/operations";
import { Loader } from "../../components/Loader/Loader";

export const ContactsPage = () => {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className="container max-w-8xl px-4 pt-30 m-auto h-dvh min-h-screen">
            <h1 className="text-5xl md:text-8xl italic font-bold mb-20">
                Phonebook
            </h1>
            <ContactForm />
            <SearchBox />

            {loading ? <Loader /> : <ContactList />}
            {error && <h2>Something went wrong...</h2>}
        </div>
    );
};
