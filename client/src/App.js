import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './containers/Login';
import Register from './containers/Register';
import Restaurants from './containers/Restaurants';
import Passport from './containers/Passport';
import RestaurantDescription from './containers/RestaurantDescription';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={() => <div><p>Welcome</p></div>} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Register} />
        <Route exact path='/restaurants' component={Restaurants} />
        <Route path='/restaurants/:id' component={RestaurantDescription} />
        <Route exact path='/passport' component={Passport} />
      </div>
    </Router>
  );
}

export default App;
