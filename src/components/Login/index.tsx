import React from 'react';
import { store } from '../../constants';
import './index.scss';

function Login() {
    const click = () => {
        store.changeAuth(true)
    }
  return (
    <form className="login__form" onClick={click}>
      <h2>Login</h2>
        <label htmlFor="mail">E-mail : </label>
        <input type="text" id='mail'/>
        <label htmlFor="pass">Password : </label>
        <input type="text" id='pass'/>
    </form>
  );
}

export default Login;
