import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class MovieView extends React.Component {


  render() {
    const { movie } = this.props;
    const onBackClick = this.props.onBackClick;

    return (
      <Container>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Body>
                  <div className='movie-view'>
                    <Card.Title>{movie.Title}</Card.Title>
                    <div className='movie-poster'>
                      <img src={movie.ImagePath}></img>
                    </div>
                    <div className='movie-title'>
                      <span className='label'>Title: </span>
                      <span className='value'>{movie.Title}</span>
                    </div>
                    <div className='movie-description'>
                      <span className='label'>Description: </span>
                      <span className='value'>{movie.Description}</span>
                    </div>
                    <button onClick={() => { onBackClick(null); }}>Back</button>
                  </div>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>

    );
  }
}

MovieView.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};