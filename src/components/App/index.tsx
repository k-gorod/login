import React, { useEffect, useState } from 'react';
import {store} from '../../constants';
import Content from '../Content';
import './index.scss';

function App() {
  const [isAuth,setAuth] = useState(false);
  
  const changeAuth = (value: boolean)=>{
    setAuth(value)
  }
  useEffect(()=>{
    store.changeAuth = changeAuth;
  },[])
  return (
    <div className="App">
      <Content isAuth={isAuth}/>
    </div>
  );
}

export default App;
