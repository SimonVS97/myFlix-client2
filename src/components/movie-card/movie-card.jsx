import React from 'react';

export class MovieCard extends React.Component {
  render() {
    const movie = this.props.movieData;
    const onMovieClick = this.props.onMovieClick;
    return <div onClick={() => { onMovieClick(movie); }} className='movie-card'> {movie.Title} </div>
  }
}