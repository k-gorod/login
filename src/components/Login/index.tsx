import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { changeAuth } from '../../reducers/Auth';
import './index.scss';

function Login() {
  const dispatch = useDispatch()
    const submit = (e: FormEvent<Element>) => {
      e.preventDefault();
      const inputs = e.currentTarget.getElementsByTagName('input');
      const formValues: Array<string> = [];
      for (let i = 0; i < inputs.length; i++) {
        formValues.push(inputs[i].value)
      }
      console.log(document.cookie);
      
      dispatch(changeAuth(true))
    }
  return (
    <form className="login__form" onSubmit={(e)=>submit(e)}>
      <h2>Login</h2>
        <label htmlFor="mail">E-mail : </label>
        <input type="text" id='mail'/>
        <label htmlFor="pass">Password : </label>
        <input type="text" id='pass'/>
        <button type='submit'>Ok</button>
    </form>
  );
}

export default Login;
