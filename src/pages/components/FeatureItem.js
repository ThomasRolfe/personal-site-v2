import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureItem = (props) => {
    return (
        <div className="bg-gradient-dark p-8 rounded-md text-white hover:shadow-lg transition invisible featureItemCard">
            <h4 className="flex items-center">
                <FontAwesomeIcon
                    icon={props.icon}
                    className="svg-gradient-primary hover:scale-110 transform transition text-4xl md:text-5xl"
                />
                <span className="font-bold text-xl ml-5">{props.title}</span>
            </h4>
            <p className="mt-8">{props.description}</p>
            <span></span>
        </div>
    );
};

export default FeatureItem;
