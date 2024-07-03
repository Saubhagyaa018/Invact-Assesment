import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/moviesSlice';
import '../styles/addMovie.css'

const AddMovieForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [watched, setWatched] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie({ title, description, releaseYear, genre, watched }));
    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
    setWatched(false);
  };

  return (
    <div className='container'>
      <div className="form-div">
        <form onSubmit={handleSubmit} className='movieForm'>
          <label>
            <p>Title:</p>
            <input
              id='input'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Description:</p>
            <textarea
              id='input'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <p>Release Year:</p>
            <input
              id='input'
              type="number"
              value={releaseYear}
              onChange={(e) => setReleaseYear(e.target.value)}
            />
          </label>
          <label>
            <p>Genre:</p>
            <input
              id='input'
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </label>
          <label>
            <p>Watched:</p>
            <input
              id='input'
              type="checkbox"
              checked={watched}
              onChange={(e) => setWatched(e.target.checked)}
            />
          </label>
          <button type="submit" id='addmovie'>Add Movie</button>
        </form>
      </div>
    </div>

  );
};

export default AddMovieForm;
