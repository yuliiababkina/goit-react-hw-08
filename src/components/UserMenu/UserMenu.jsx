import { useDispatch, useSelector } from "react-redux";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export const UserMenu = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center">
            {isLoggedIn && (
                <p className="text-base md:text-2xl mr-4 md:mr-12">
                    Welcome, <span className="font-bold">{user.name}</span>
                </p>
            )}
            <button
                className="btn btn-outline btn-primary text-md"
                type="button"
                onClick={() => dispatch(logout())}
            >
                Logout
            </button>
        </div>
    );
};
