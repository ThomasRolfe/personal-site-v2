import React from "react";

const BrandedButton = (props) => {
    return (
        <button
            to={props.to ?? "#"}
            target={props.target}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
            id={props.id}
            type={props.type}
        >
            {props.children}
        </button>
    );
};

export default BrandedButton;
