import React from "react";
import { Link } from "react-router-dom";

const BrandedButton = (props) => {
    return (
        <button
            to={props.to ?? "#"}
            target={props.target}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
            id={props.id}
        >
            {props.children}
        </button>
    );
};

export default BrandedButton;
