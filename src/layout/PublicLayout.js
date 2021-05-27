import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const PublicLayout = (props) => {
    return (
        <main className="font-sans bg-dark relative overflow-x-hidden">
            <Navbar />
            {props.children}
            <Footer />
        </main>
    );
};

export default PublicLayout;
