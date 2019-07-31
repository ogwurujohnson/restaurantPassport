import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './containers/Login';
import Register from './containers/Register';

function App() {
  return (
    <Router>
      <div className="App">
  <Route path='/' exact component={() => <div><p>Welcome</p></div>} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Register} />
      </div>
    </Router>
  );
}

export default App;
