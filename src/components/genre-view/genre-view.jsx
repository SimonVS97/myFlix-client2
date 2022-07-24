import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { MovieCard } from '../movie-card/movie-card';

export class GenreView extends React.Component {


  render() {
    const genre = this.props.genre;
    const genremovies = this.props.genremovies;

    return (
      <Container>
        <Row>
          <Col>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>{genre.Name}</Card.Title>
                  <Card.Text>{genre.Description}</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    )

  }

}