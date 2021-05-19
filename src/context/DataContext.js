import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [portfolios, setPortfolios] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);

    return (
        <DataContext.Provider
            value={{ portfolios, setPortfolios, blogPosts, setBlogPosts }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
