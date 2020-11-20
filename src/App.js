import React from 'react';
import Nav from './component/Nav'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import Service from './component/Service';
import Product from './component/Product';
import Contact from './component/Contact';
import Footer from './component/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route  path='/service' component={Service}/>
          <Route  path='/product' component={Product}/>
          <Route  path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;