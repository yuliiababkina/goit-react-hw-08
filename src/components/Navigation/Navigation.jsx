import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            {!isLoggedIn && (
                <NavLink
                    className="link link-primary text-base md:text-2xl font-bold"
                    to="/"
                >
                    Home
                </NavLink>
            )}

            {isLoggedIn && (
                <NavLink
                    className="link link-primary text-base md:text-2xl font-bold"
                    to="/contacts"
                >
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};
