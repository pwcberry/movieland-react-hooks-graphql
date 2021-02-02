import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import Card from "./Card";
import { MOVIE_SEARCH_QUERY } from "../../services/query.js";

const SearchResults = ({ query }) => {
    const { data, error, loading } = useQuery(MOVIE_SEARCH_QUERY, {
        variables: {
            input: { query },
        },
    });

    if (loading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section>
                <p>Error</p>
            </section>
        );
    }

    const { totalCount, results } = data.search;

    if (totalCount === 0) {
        return (
            <section>
                <p>No matches.</p>
            </section>
        );
    }

    return (
        <section>
            {results.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </section>
    );
};

SearchResults.propTypes = {
    query: PropTypes.string,
};

export default SearchResults;
