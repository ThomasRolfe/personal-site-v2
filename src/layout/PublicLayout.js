import React from "react";
import Navbar from "./components/Navbar";

const PublicLayout = (props) => {
    return (
        <main className="sans bg-dark ">
            <Navbar />
            {props.children}
        </main>
    );
};

export default PublicLayout;
