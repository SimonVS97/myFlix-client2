import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegisterView() {
  [username, setUsername] = useState('');
  [password, setPassword] = useState('');
  [email, setEmail] = useState('');
  [birthday, setBirthDay] = useState('');
  const OnLogInClick = props.OnLogInClick;



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
      <label>
        E-Mail:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
      </label>
      <label>
        Date of birth:
        <input type="date" value={birthday} onChange={e => setBirthDay(e.target.value)}></input>
      </label>
      <button type="submit">Submit</button>
      <button onClick={() => { OnLogInClick(); }}>Log-In</button>
    </form>
  );
}


RegisterView.PropTypes = {
  OnLogInClick: PropTypes.func.isRequired
}; 