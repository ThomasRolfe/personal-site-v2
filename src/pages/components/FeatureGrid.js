import React from "react";

const FeatureGrid = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {props.children}
        </div>
    );
};

export default FeatureGrid;
