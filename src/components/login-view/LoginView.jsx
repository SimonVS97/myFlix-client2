import React, { useState } from 'react';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  const handleRegister = (e) => {
    console.log('hello');
    e.preventDefault();
    props.onRegisterClick();
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
      <button type="submit" onClick={handleRegister}>Register</button>
    </form>
  );

}