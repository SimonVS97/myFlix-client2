import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onRegisterClick = props.onRegisterClick;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <button onClick={() => { onRegisterClick(); }}>Register</button>
    </form>
  );

}

LoginView.PropTypes = {
  onRegisterClick: PropTypes.func.isRequired,
  onLoggedIn: PropTypes.func.isRequired
}; 