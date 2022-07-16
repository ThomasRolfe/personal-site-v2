import React from "react";
import {
    Switch,
    Route,
    BrowserRouter as Router,
    useLocation,
    Redirect,
} from "react-router-dom";
import ReactGA from "react-ga";
import ScrollToTop from "./components/helpers/ScrollToTop";
import {
    FireGradient,
    GreyGradient,
    PrimaryGradient,
} from "./components/helpers/GradientDefinitions";

import Home from "./pages/home/Home.tsx";
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioPost from "./pages/portfolio/PortfolioPost";
import Contact from "./pages/contact/Contact";
import Page404 from "./pages/Page404";
import Galaxy from "./pages/galaxy/galaxy";

const trackingId = "UA-120633211-4";

function usePageViews() {
    let location = useLocation();
    React.useEffect(() => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    }, [location]);
}

const routes = [
    { routeName: "home", path: "/", component: Home, menu: true },
    {
        routeName: "portfoliopost",
        path: "/portfolio/:slug",
        component: PortfolioPost,
        menu: false,
    },
    {
        routeName: "portfolio",
        path: "/portfolio",
        component: Portfolio,
        menu: true,
    },
    {
        routeName: "contact",
        path: "/contact",
        component: Contact,
        menu: true,
    },
];

export default function App() {
    usePageViews();

    ReactGA.initialize(trackingId);

    return (
        <Router>
            <FireGradient />
            <PrimaryGradient />
            <GreyGradient />
            <ScrollToTop />

            <Switch>
                <Route
                    path={`/galaxy`}
                    render={() => {
                        return <Galaxy />;
                    }}
                />
                {routes.map((routes, key) => (
                    <Route
                        exact
                        path={routes.path}
                        render={(props) => {
                            return <routes.component {...props} />;
                        }}
                        key={key}
                    />
                ))}
                <Route path="/" exact component={Home} />
                <Route path="/404" component={Page404} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
}
