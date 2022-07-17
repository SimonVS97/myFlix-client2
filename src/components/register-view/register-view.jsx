import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap/Button';

export function RegisterView(props) {
  [username, setUsername] = useState('');
  [password, setPassword] = useState('');
  [email, setEmail] = useState('');
  [birthday, setBirthDay] = useState('');
  const OnLogInClick = props.OnLogInClick;




  return (
    <Form>
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
        <Form.label>Password:</Form.label>
        <Form.Control
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholer="Enter a password">
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.label>E-Mail:</Form.label>
        <Form.Control
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholer="Enter an e-mail">
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.label>Date of birth:</Form.label>
        <Form.Control
          type="date"
          value={birthday}
          onChange={e => setBirthDay(e.target.value)}
          required
          placeholer="Enter your date of birth">
        </Form.Control>
      </Form.Group>

      <Button variant="primary" onClick={() => { OnLogInClick(); }}>Log-In</Button>
    </Form>
  );
}


RegisterView.PropTypes = {
  OnLogInClick: PropTypes.func.isRequired
}; 