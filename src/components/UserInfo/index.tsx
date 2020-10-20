import React from 'react';
import { store } from '../../constants';
import './index.scss';

const UserInfo: React.FC = () => {
    const click = () => {
        store.changeAuth(false)
    }
  return (
    <div className="login__userInfo" onClick={click}>
      <h2>User Information</h2>
      <p>Name: Vasya</p>
      <p>E-mail: qwe@qw.qw</p>
    </div>
  );
}

export default UserInfo;
