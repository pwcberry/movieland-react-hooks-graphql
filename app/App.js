import React, { useState } from "react";
import Search from "./containers/Search";
import Header from "./components/Header";
import MovielandStyle from "./styles";

const App = () => {
    const [searchParams, setSearchParams] = useState({ query: "thor" });

    return (
        <MovielandStyle>
            <Header onSearch={setSearchParams} />
            <Search searchParams={searchParams} />
        </MovielandStyle>
    );
};

export default App;
