import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export class MovieCard extends React.Component {
  render() {
    const movie = this.props.movieData;
    const onMovieClick = this.props.onMovieClick;

    return (
      <div onClick={() => { onMovieClick(movie); }} className='movie-card'> {movie.Title} </div>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};