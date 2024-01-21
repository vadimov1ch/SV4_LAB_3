import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { Title, Poster, Year, imdbRating } = movie;

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={Poster !== "N/A" ? Poster : 'https://placehold.it/198x264&text=No+Image'} alt={Title} />
      </div>
      <div className="movie-info">
        <h4 className="movie-title">{Title}</h4>
        <p className="movie-year">{Year}</p>
        {imdbRating && <p className="movie-rating">Rating: {imdbRating}</p>}
      </div>
    </div>
  );
};

export default MovieCard;