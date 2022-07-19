import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


import './movie-view.scss';

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
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Img variant="top" src={movie.ImagePath}></Card.Img>
                  <Card.Text>{movie.Description}</Card.Text>
                  <Button variant="primary" type="submit" onClick={() => { onBackClick(null); }}>Back</Button>
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