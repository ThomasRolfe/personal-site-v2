import PublicLayout from "../layout/PublicLayout";
import BrandedLink from "../components/buttons/BrandedLink";

const Page404 = (props) => {
    return (
        <PublicLayout>
            <section className="">
                <div className="max-w-screen-2xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 w-full  mt-12 md:mt-24 relative">
                    <h2 className="text-white text-4xl sm:text-7xl font-extrabold tracking-wide text-center py-8 md:my-12 fade-up">
                        404
                    </h2>
                    <div className="flex justify-center">
                        <BrandedLink
                            to={`/`}
                            className="button button-brand-hollow mt-12 font-bold custom-hover"
                        >
                            Return Home
                        </BrandedLink>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default Page404;
