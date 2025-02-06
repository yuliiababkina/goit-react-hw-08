import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values, actions) => {
        dispatch(login(values))
            .unwrap()
            .then(() => navigate("/contacts"));
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
                                            New to Phonebook?{" "}
                                            <Link
                                                to="/register"
                                                className="label-text-alt link-primary link-hover"
                                            >
                                                Register
                                            </Link>
                                        </p>
                                    </label>
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary w-full text-base">
                                        Login
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
