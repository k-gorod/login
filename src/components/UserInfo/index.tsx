import React from 'react';
import { useDispatch } from 'react-redux';
import { changeAuth, changeUser } from '../../reducers/Data';
import store from '../../store';
import './index.scss';

const UserInfo: React.FC = () => {
  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    dispatch(changeUser({name:"",email:""}))
    dispatch(changeAuth(false))
  }
  return (
    <div className="login__userInfo" >
      <h2>User Information</h2>
      <p>Name: {store.getState().data.name}</p>
      <p>E-mail: {store.getState().data.email}</p>
      <button type="button" onClick={buttonClickHandler}>
        LogOut
      </button>
    </div>
  );
}

export default UserInfo;
