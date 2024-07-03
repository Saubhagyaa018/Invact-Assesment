import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieDetails from '../components/MovieDetails';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movies.movies.find((movie) => movie.id === id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details-page">
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
