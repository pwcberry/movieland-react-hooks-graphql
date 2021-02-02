import React, { useState } from "react";
import Search from "./containers/Search/index.js";

const App = () => {
    const [searchParams, setSearchParams] = useState({ query: "thor" });

    return (
        <>
            <Search searchParams={searchParams} />
        </>
    );
};

export default App;
