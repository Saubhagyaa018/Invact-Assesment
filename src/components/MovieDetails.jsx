import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovie, deleteMovie, toggleWatchStatus } from '../redux/moviesSlice';

const MovieDetails = ({ movie }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState({ ...movie });
  const [rating, setRating] = useState(movie.rating || 0);
  const [review, setReview] = useState(movie.review || '');

  const dispatch = useDispatch();

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie({ ...editedMovie, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie({ ...editedMovie, rating, review }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

  const handleToggleWatchStatus = () => {
    dispatch(toggleWatchStatus({ id: movie.id, watched: !movie.watched }));
  };

  return (
    <div className="movie-details">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={editedMovie.title}
              onChange={handleEditChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={editedMovie.description}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Release Year:
            <input
              type="number"
              name="releaseYear"
              value={editedMovie.releaseYear}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Genre:
            <input
              type="text"
              name="genre"
              value={editedMovie.genre}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Watched:
            <input
              type="checkbox"
              checked={editedMovie.watched}
              onChange={(e) => setEditedMovie({ ...editedMovie, watched: e.target.checked })}
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>{movie.releaseYear}</p>
          <p>{movie.genre}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleToggleWatchStatus}>
            Mark as {movie.watched ? 'Unwatched' : 'Watched'}
          </button>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
