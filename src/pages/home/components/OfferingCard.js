import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OfferingCard = (props) => {
    return (
        <div ref={props.refFunction}>
            <div className="md:grid grid-cols-5 pt-0 px-0 lg:py-0 md:px-16 lg:px-20 invisible absolute offeringCard h-full flex items-center">
                <div className="col-span-2 ">
                    <FontAwesomeIcon
                        icon={props.icon}
                        className="offering-icon text-large md:text-huge invisible offeringIcon"
                    />
                </div>
                <div className="col-span-5 z-20 invisible offeringCopy p-4 md:p-0">
                    <h3 className="prepend-primary text-black text-2xl xs:text-3xl md:text-5xl md:mt-12 font-bold w-full">
                        {props.title}
                    </h3>
                    {props.copy.map((copy, index) => {
                        return (
                            <p
                                key={index}
                                className="mt-12 xs:mt-16 md:mt-24 leading-relaxed md:leading-relaxed font-light text-gray-600 text-md xs:text-lg md:text-3xl"
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
