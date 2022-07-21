import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

import './movie-card.scss';


export class MovieCard extends React.Component {
  render() {
    const movie = this.props.movieData;
    const onMovieClick = this.props.onMovieClick;


    return (
      <CardGroup className='cardGroup' >
        <Card >
          <Card.Body >
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Img variant="top" src={movie.ImagePath} style={{ height: '70%' }} />
            <Card.Text>{movie.Description}</Card.Text>
            <Button onClick={() => onMovieClick(movie)} variant="primary">Open</Button>
          </Card.Body>
        </Card>
      </CardGroup>

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