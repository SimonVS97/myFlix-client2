import React from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null
    }
  }

  componentDidMount() {
    axios.get('https://movie-app-svs.herokuapp.com/')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const movies = this.state.movies;
    const selectedMovie = this.state.selectedMovie;

    if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />

    if (movies.length === 0) {
      return <div className="main-view">The list is empty!</div>;
    } else {
      return (
        <div className="main-view">
          {movies.map((movie) => {
            return <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          })}
        </div>
      );
    }
  }
}