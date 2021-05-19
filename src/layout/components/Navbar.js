const navigation = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <header className="bg-transparent absolute w-full">
            <nav
                className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Top"
            >
                <div className="w-full py-6 flex items-center justify-between">
                    <div className="flex w-full justify-between">
                        <a href="/">
                            <div
                                id="nav-logo"
                                className="text-white text-2xl font-bold flex items-center"
                            >
                                <span>Tom Rolfe</span>
                            </div>
                        </a>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-white hover:text-indigo-50"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-white hover:text-indigo-50"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
