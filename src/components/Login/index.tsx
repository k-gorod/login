import React from 'react';
import { store } from '../../constants';
import './index.scss';

function Login() {
    const click = () => {
        store.changeAuth(true)
        console.log('here');
        
    }
  return (
    <div className="login" onClick={click}>
        Login component
    </div>
  );
}

export default Login;
