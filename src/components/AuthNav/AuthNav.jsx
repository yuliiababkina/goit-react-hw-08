import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
        <div className="flex gap-4">
            <NavLink
                className="btn btn-outline btn-primary text-md"
                to="/register"
            >
                Register
            </NavLink>
            <NavLink
                className="btn btn-outline btn-primary text-md"
                to="/login"
            >
                Log In
            </NavLink>
        </div>
    );
};
