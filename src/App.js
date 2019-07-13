import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/header';
import Favorites from './pages/favorites';
import Dashboard from './pages/dashboard';
import Details from './pages/details';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Link to="/product">To Product</Link><br />
        <Link to="/">Home</Link><br />
        <Route exact path="/" component={Favorites}></Route>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/product" component = {Details} ></Route>
      </div>
    </Router>
  );
}

export default App;
