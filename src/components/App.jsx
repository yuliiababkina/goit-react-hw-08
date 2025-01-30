import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import s from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";

const App = () => {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
            {loading && <h2>Loading...</h2>}
            {error && <h2>Something went wrong...</h2>}
        </div>
    );
};

export default App;
