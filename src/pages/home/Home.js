import React from "react";
import PublicLayout from "../../layout/PublicLayout";
import BrandedLink from "../../components/buttons/BrandedLink";

const index = (props) => {
    return (
        <PublicLayout>
            <section className="h-screen flex flex-col justify-center">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h1 className="text-white text-7xl font-extrabold">
                        Full Stack <br />
                        Web Development
                    </h1>
                    <p className="text-gray-400 text-2xl mt-12">
                        Web app and website development, from planning and
                        design to production and deployment.
                    </p>
                    <div>
                        <BrandedLink to="#" className="button button-brand ">
                            <span>What do I do?</span>
                        </BrandedLink>
                        <BrandedLink
                            to="#"
                            className="button button-brand hollow"
                        >
                            Portfolio
                        </BrandedLink>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default index;
