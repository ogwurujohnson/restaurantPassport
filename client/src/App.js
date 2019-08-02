import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Restaurants from "./containers/Restaurants";
import Passport from "./containers/Passport";
import RestaurantDescription from "./containers/RestaurantDescription";
import newRestaurant from "./containers/newRestaurant";
import LandingPage from './containers/LandingPage';
import Header from './Layouts/Header';
import styled from 'styled-components';
import PrivateRoute from './containers/PrivateRoute';


function App(props) {
  return (
    <Router>
      <AppWrapper>
        <Header {...props} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route exact path="/restaurants" component={Restaurants} />
          <PrivateRoute path="/restaurants/new" component={newRestaurant} />
          <Route path="/restaurants/:id" component={RestaurantDescription} />
          <PrivateRoute exact path="/passport" component={Passport} />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;

const AppWrapper = styled.div`
  background: #F9F9F9;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;