import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class ProfileView extends React.Component {

  constructor() {
    super();
    this.state = {
      profile: null
    }
  }

  getUserInfo(user, token) {
    axios.get(`https://movie-app-svs.herokuapp.com/users/${user}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
      this.setState({
        profile: response.data
      })
    })
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    let user = this.props.user;
    this.getUserInfo(user, accessToken);
  }

  render() {
    const user = this.props.user;
    const token = localStorage.getItem('token');
    const profile = this.state.profile;


    console.log(profile);

    return (
      <Container>
        <Row>
          <Col>
            {profile ? (
              <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Title>Profile information</Card.Title>
                    <Card.Text>Username: {profile.Username}</Card.Text>
                    <Card.Text>Email: {profile.Email}</Card.Text>
                    <Card.Text>Date of Birth: {profile.Birthday}</Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            ) : (
              <div></div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Update your profile information</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>

    )

  }

}