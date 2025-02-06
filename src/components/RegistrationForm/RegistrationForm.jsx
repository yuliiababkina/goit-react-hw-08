import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

import { register } from "../../redux/auth/operations";

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const handleSubmit = (value, actions) => {
        dispatch(register(value))
            .unwrap()
            .then(() => navigate("/"));
        actions.resetForm();
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <Form className="card-body">
                                <div className="form-control">
                                    <label className="label mb-2">
                                        <span className="label-text text-base">
                                            Name
                                        </span>
                                    </label>
                                    <Field
                                        name="name"
                                        type="email"
                                        className="input input-bordered"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label mb-2">
                                        <span className="label-text text-base">
                                            Email
                                        </span>
                                    </label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className="input input-bordered"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label mb-2">
                                        <span className="label-text text-base">
                                            Password
                                        </span>
                                    </label>
                                    <Field
                                        name="password"
                                        type="password"
                                        className="input input-bordered outline-hidden"
                                        required
                                    />
                                    <label className="label mt-2">
                                        <p className="text-sm">
                                            Have an account?{" "}
                                            <Link
                                                to="/login"
                                                className="label-text-alt link-primary link-hover"
                                            >
                                                LogIn
                                            </Link>
                                        </p>
                                    </label>
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary w-full text-base">
                                        Register
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    );
};
