import React from 'react';
import Login from '../Login';
import UserInfo from '../UserInfo';
import './index.scss';

interface IContentProps {
  isAuth: boolean
}

const Content: React.FC<IContentProps> = (props) => {
  
  return (
    <div className="login__wrapper">
      {props.isAuth?<UserInfo />:<Login />}
    </div>
  );
}

export default Content;
