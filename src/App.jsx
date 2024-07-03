import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './redux/moviesSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import Sidebar from './components/Sidebar';
import MovieDetailsPage from './pages/MovieDetailsPage';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (movieStatus === 'idle') {
      dispatch(fetchMovies());
    }
  }, [movieStatus, dispatch]);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/add-movie" element={<AddMovieForm />} />
            <Route path="/watchlist" element={<MovieList movies={movies} />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/" element={<MovieList movies={movies} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
