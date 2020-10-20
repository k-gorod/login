import React, { useEffect, useState } from 'react';
import Login from '../Login';
import UserInfo from '../UserInfo';
import './index.scss';

function App() {
  const [isAuth,setAuth] = useState(false);
  useEffect(()=>{
    
  },[isAuth])
  return (
    <div className="App">
      {isAuth?<UserInfo />:<Login />}
    </div>
  );
}

export default App;
