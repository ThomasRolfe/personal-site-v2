import React, { useState, useEffect, useContext } from "react";
import {
    Switch,
    Route,
    BrowserRouter as Router,
    useLocation,
} from "react-router-dom";
import logo from "./logo.svg";
import ReactGA from "react-ga";
import ScrollToTop from "./components/helpers/ScrollToTop";
import { DataContext } from "./context/DataContext";
import { GetBlogPosts } from "./services/api/blogs";
import { GetPortfolioPosts } from "./services/api/portfolios";
import {
    FireGradient,
    GreyGradient,
    PrimaryGradient,
} from "./components/helpers/GradientDefinitions";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blog/BlogPost";
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioPost from "./pages/portfolio/PortfolioPost";
import Contact from "./pages/contact/Contact";
import Page404 from "./pages/Page404";

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
    { routeName: "about", path: "/about", component: About, menu: true },
    {
        routeName: "blogpost",
        path: "/blog/:slug",
        component: BlogPost,
        menu: false,
    },
    { routeName: "blog", path: "/blog", component: Blog, menu: true },
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
    const { portfolios, setPortfolios } = useContext(DataContext);
    const { blogPosts, setBlogPosts } = useContext(DataContext);

    usePageViews();

    ReactGA.initialize(trackingId);

    useEffect(() => {
        GetBlogPosts().then((response) => {
            setBlogPosts(response.data);
        });

        GetPortfolioPosts().then((response) => {
            setPortfolios(response.data);
        });
    }, []);

    return (
        <Router>
            <FireGradient />
            <PrimaryGradient />
            <GreyGradient />
            <ScrollToTop />

            <Switch>
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
                <Route component={Page404} />
            </Switch>
        </Router>
    );
}
