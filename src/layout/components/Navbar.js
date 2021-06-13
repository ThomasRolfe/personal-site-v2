import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const navigation = [
    { name: "About Me", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header className="bg-transparent absolute w-full z-30">
            <nav
                className="max-w-screen-2xl mx-auto px-6 lg:px-8"
                aria-label="Top"
            >
                <div className="w-full py-6 flex items-center justify-between">
                    <div className="flex w-full justify-between items-center">
                        <Link to="/">
                            <div
                                id="nav-logo"
                                className="text-white text-lg sm:text-2xl font-bold flex items-center prepend-primary"
                            >
                                <span>Tom Rolfe</span>
                            </div>
                        </Link>
                        <div className="lg:hidden">
                            <FontAwesomeIcon
                                icon={faBars}
                                className="text-white hover:scale-110 transform transition text-xl"
                                id=""
                                onClick={() => {
                                    setMobileNavOpen(!mobileNavOpen);
                                }}
                            />
                        </div>
                        <div className="hidden ml-10 space-x-8 lg:block text-gray-400">
                            {navigation.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="hover:text-white transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {mobileNavOpen && (
                    <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                        {navigation.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-base font-bold text-white hover:text-indigo-50"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
