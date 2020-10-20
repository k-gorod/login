import React from 'react';
import './index.scss';

const UserInfo: React.FC = () => {
    const click = () => {

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
