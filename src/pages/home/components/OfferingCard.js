import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OfferingCard = (props) => {
    return (
        <div ref={props.refFunction}>
            <div className="md:grid grid-cols-5 pt-12 px-0 lg:py-52 md:px-20 invisible absolute offeringCard">
                <div className="col-span-2 ">
                    <FontAwesomeIcon
                        icon={props.icon}
                        className="offering-icon text-large md:text-huge invisible offeringIcon"
                    />
                </div>
                <div className="col-span-3 z-20 invisible offeringCopy">
                    <h3 className="prepend-primary text-black text-3xl md:text-5xl font-bold">
                        {props.title}
                    </h3>
                    {props.copy.map((copy, index) => {
                        return (
                            <p
                                key={index}
                                className="mt-8 md:mt-16 leading-relaxed font-light text-gray-600 text-lg md:text-3xl"
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
