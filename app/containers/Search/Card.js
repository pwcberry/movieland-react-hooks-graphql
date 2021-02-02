import React from "react";
import PropTypes from "prop-types";

const Card = ({ movie }) => {
    return (
        <article className="card" style={{ backgroundImage: `url("${movie.posterUrl}")` }}>
            <div className="card-content">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate.substring(0, 4)}</p>
            </div>
        </article>
    );
};

Card.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        releaseDate: PropTypes.string,
        posterUrl: PropTypes.string,
    }),
};

export default Card;
