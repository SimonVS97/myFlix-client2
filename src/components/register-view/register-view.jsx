import React from 'react';

export function RegisterView() {



  return (
    <form>
      <label>
        Username:
        <input type="text" ></input>
      </label>
      <label>
        Password:
        <input type="password"></input>
      </label>
      <label>
        E-Mail:
        <input type="email"></input>
      </label>
      <label>
        <input type="date"></input>
      </label>
      <button type="submit">Register</button>
    </form>
  );
}