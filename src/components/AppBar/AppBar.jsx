import { useSelector } from "react-redux";

import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className="navbar bg-neutral text-neutral-content absolute top-0 left-0">
            <header className="container max-w-8xl md:px-4 m-auto flex justify-between items-center">
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </header>
        </div>
    );
};
