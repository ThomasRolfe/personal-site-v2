import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OfferingCard = (props) => {
    return (
        <div ref={props.refFunction}>
            <div className="grid grid-cols-5 py-52 px-20 invisible absolute offeringCard">
                <div className="col-span-2">
                    <FontAwesomeIcon
                        icon={props.icon}
                        className="huge-icon invisible offeringIcon"
                    />
                </div>
                <div className="col-span-3 z-20 invisible offeringCopy">
                    <h3 className="prepend-primary text-black text-5xl font-bold">
                        {props.title}
                    </h3>
                    {props.copy.map((copy, index) => {
                        return (
                            <p
                                key={index}
                                className="mt-16 leading-relaxed font-light text-gray-500 text-2xl"
                            >
                                {copy}
                            </p>
                        );
                    })}
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default OfferingCard;
