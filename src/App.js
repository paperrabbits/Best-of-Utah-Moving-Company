import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import './App.scss';
import Banner from './Components/Branding/Banner';
import Auth from './Components/Auth';
import Header from './Components/Header';
import routes from './routes';

const App = (props) => {
  
  useEffect(() => {
    console.log(props, 'all-props');
  },[])

  return (
    <div className="App">
      <Header />
      <div className="auth-container" >
        <Auth />
      </div>
    </div>
  );
}

export default withRouter(App);