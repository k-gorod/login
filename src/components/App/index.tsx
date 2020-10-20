import React from 'react';
import { connect } from 'react-redux';
import Content from '../Content';
import './index.scss';

function App(props: any) {
  return (
    
    <div className="App">
      <Content isAuth={props.store.data.isAuth}/>
    </div>
  );
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({})
)(App);
