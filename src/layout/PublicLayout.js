import React from "react";
import Navbar from "./components/Navbar";

const PublicLayout = (props) => {
    return (
        <main className="font-sans bg-dark relative overflow-x-hidden">
            <Navbar />
            {props.children}
        </main>
    );
};

export default PublicLayout;
