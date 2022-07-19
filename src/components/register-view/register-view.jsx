import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function RegisterView(props) {
  [username, setUsername] = useState('');
  [password, setPassword] = useState('');
  [email, setEmail] = useState('');
  [birthday, setBirthDay] = useState('');
  const OnLogInClick = props.OnLogInClick;




  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Form>

                  <Card.Title>Please Register</Card.Title>



                  <Form.Group>
                    <Form.Label> Username:</Form.Label >
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      placeholder="Enter a username"
                      required>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                      placeholder="Enter a password">
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>E-Mail:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      placeholder="Enter an e-mail">
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Date of birth:</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
                      onChange={e => setBirthDay(e.target.value)}
                      required
                    >
                    </Form.Control>
                  </Form.Group>
                  <br></br>

                  <Button type="submit" variant="primary">Submit</Button>
                  <Button variant="primary" onClick={() => { OnLogInClick(); }}>Log-In</Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container >
  )
}


RegisterView.PropTypes = {
  OnLogInClick: PropTypes.func.isRequired
}; 