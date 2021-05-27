import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 flex flex-col justify-between">
            <div>
                <Link to="/" className="my-6 block">
                    <div
                        id="nav-logo"
                        className="text-white text-2xl font-bold flex items-center prepend-primary"
                    >
                        <span>Tom Rolfe</span>
                    </div>
                </Link>
                <ul className="list-none flex gap-8 block text-gray-400">
                    <li>
                        <Link to="/" className="hover:text-white transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-white transition ">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-white transition">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-white transition">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text-center text-gray-300 mt-24 mb-6">
                Copyright {new Date().getFullYear()} Tom Rolfe
            </div>
        </footer>
    );
};

export default Footer;
