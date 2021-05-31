import React from "react";

const Contact = (props) => {
    return (
        <>
            <div className="clip-slant-right h-48  bg-white w-full relative z-30"></div>
            <div className="bg-white">
                <div className="grid grid-cols-2 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
                    <div>
                        <h2 className=" text-7xl font-extrabold tracking-wide  my-36 fade-up">
                            Lets work{" "}
                            <span className="text-gradient-primary">
                                together
                            </span>
                        </h2>
                    </div>
                    <div>form</div>
                </div>
            </div>
        </>
    );
};

export default Contact;
