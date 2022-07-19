import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component {
  render() {
    const movie = this.props.movieData;
    const onMovieClick = this.props.onMovieClick;
    return (
      <div>hello2</div>
    )

    /*    return (
          <Card>
            <div>hello2</div>
            <Card.Img variant="top" src={movie.ImagePath} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
            </Card.Body>
          </Card>
        ); */
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};