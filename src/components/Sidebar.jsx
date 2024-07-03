import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  '../styles/sidebar.css';

const Sidebar = () => {
  const movieCount = useSelector((state) => state.movies.movies.length);

  return (
    <div className="sidebar">
      <h2>Movie Mania</h2>
      <nav>
        <ul id='nav-ul'>
          <li>
            <NavLink to="/add-movie">Add Movie</NavLink>
          </li>
          <li>
            <NavLink to="/watchlist">
              Watchlist <span className="badge">{movieCount}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Sidebar;
