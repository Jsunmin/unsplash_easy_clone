import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import Main from './components/Main.js';
import SpecificPic from './components/SpecificPic.js';  

import logo from './photo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/"><img className='logo' src={logo} alt=''/>Splash~</NavbarBrand>
          <NavbarToggler/>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Jsunmin">Jsunmin</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <BrowserRouter>
          <Switch>
            <Route exact path ='/' component={Main}/>
            <Route exact path ='/:author' component={Main}/>
            <Route exact path ='/SpecificPic/:id/:author' component={SpecificPic}/>
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
