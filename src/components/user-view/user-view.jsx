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
      profile: null,
      username: null,
      password: null,
      email: null,
      birthday: null
    }
  }

  // set Username of info to be updated
  setUsername(newUsername) {
    this.setState({
      username: newUsername
    });
  }
  // set Password of info to be updated
  setPassword(newPassword) {
    this.setState({
      password: newPassword
    });
  }

  // set Email of info to be updated
  setEmail(newEmail) {
    this.setState({
      email: newEmail
    });
  }

  // set birthday of info to be updated
  setBirthday(newBirthday) {
    this.setState({
      birthday: newBirthday
    });
  }

  // Get info on the user, user is passed as an parameter into method
  getUserInfo(user, token) {
    axios.get(`https://movie-app-svs.herokuapp.com/users/${user}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
      this.setState({
        profile: response.data
      })
    })
  }
  // put request to server to update user information
  changeUserInfo(user, token) {
    axios.put(`https://movie-app-svs.herokuapp.com/users/${user}`,
      { headers: { Authorization: `Bearer ${token}` } },
      {
        Username: this.state.username,
        Password: this.state.password,
        Email: this.state.email,
        Birthday: this.state.birthday
      }
    ).then(response => {
      console.log(response.data);
      window.open('/', '_self');
    }).catch(error => {
      console.error(error);
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
            <CardGroup>
              <Card>
                <Card.Body>
                  <Form>
                    <Card.Title>Update your information</Card.Title>
                    <Form.Group controlId="formUsername">
                      <Form.Label>Username:</Form.Label>
                      <Form.Control type="text" onChange={e => setUsername(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control type="password" onChange={e => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type="email" onChange={e => this.setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBirthday">
                      <Form.Label>Birthday:</Form.Label>
                      <Form.Control type="date" onChange={e => this.setBirthday(e.target.value)}></Form.Control>
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit" onClick={this.changeUserInfo(user, token)}>Submit</Button>
                  </Form>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>

    )

  }

}