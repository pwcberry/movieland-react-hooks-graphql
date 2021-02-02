import React from "react";
import PropTypes from "prop-types";
import SearchResults from "./SearchResults.js";

const Search = ({ searchParams: { query } }) => {
    return typeof query === "string" && query.length > 0 ? (
        <>
            <SearchResults query={query} />
        </>
    ) : null;
};

Search.propTypes = {
    searchParams: PropTypes.shape({
        query: PropTypes.string,
    }),
};

export default Search;
