import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { HomePage } from "../pages/HomePage/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { Layout } from "./Layout/Layout";

import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? null : (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute>
                                <ContactsPage />
                            </PrivateRoute>
                        }
                    />
                </Route>
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute>
                            <RegistrationPage />
                        </RestrictedRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute>
                            <LoginPage />
                        </RestrictedRoute>
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;
