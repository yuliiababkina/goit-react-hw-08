import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div
            className="hero min-h-screen "
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content container mx-auto px-4 text-neutral-content text-center">
                <div className="max-w-4xl">
                    <h1 className="mb-10 text-5xl md:text-7xl font-bold">
                        Your Smart, Simple Phonebook
                    </h1>
                    <p className="mb-10 text-xl ">
                        Keep all your contacts organized, accessible, and
                        up-to-date—effortlessly. Say goodbye to lost numbers and
                        hello to your new, smarter phonebook.
                    </p>
                    <Link className="btn btn-primary text-lg p-6" to="/login">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};
