import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import MovieList from '../components/MovieList';

const WatchlistPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (movieStatus === 'idle') {
      dispatch(fetchMovies());
    }
  }, [movieStatus, dispatch]);

  return (
    <div className="watchlist-page">
      <h1>Watchlist</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default WatchlistPage;
