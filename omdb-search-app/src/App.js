import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header/header';
import SearchBar from './Components/SearchBar/SearchBar';
import MovieList from './Components/MovieList/MovieList';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchSubmit = async (term) => {
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        apikey: 'c99e926f',
        s: term
      }
    });

    if (response.data.Search) {
      setMovies(response.data.Search);
    }
  };

  useEffect(() => {
    onSearchSubmit('Matrix');
  }, []);

  return (
    <div className="app">
      <Header />
      <SearchBar onFormSubmit={onSearchSubmit} />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
};

export default App;