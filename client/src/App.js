import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Restaurants from "./containers/Restaurants";
import Passport from "./containers/Passport";
import RestaurantDescription from "./containers/RestaurantDescription";
import newRestaurant from "./containers/newRestaurant";
import Header from './Layouts/Header';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <p>Welcome</p>
              </div>
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route exact path="/restaurants" component={Restaurants} />
          <Route path="/restaurants/new" component={newRestaurant} />
          <Route path="/restaurants/:id" component={RestaurantDescription} />
          <Route exact path="/passport" component={Passport} />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;

const AppWrapper = styled.div`
  background: #F9F9F9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;