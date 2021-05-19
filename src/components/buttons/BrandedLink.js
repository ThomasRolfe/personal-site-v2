import React from "react";
import { Link } from "react-router-dom";

const BrandedLink = (props) => {
    return (
        <Link
            to={props.to ?? "#"}
            target={props.target}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </Link>
    );
};

export default BrandedLink;
