import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render = {props => (
      localStorage.getItem('token') ?
      (
      <Component {...props} /> ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    ) 
  }
  />
)


export default AuthRoute;