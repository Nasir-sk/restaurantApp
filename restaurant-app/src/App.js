import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap'
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to='/create'>Create</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to='/search'>Search</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to='/update'>Update</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to='/list'>List</Link></Nav.Link>
         
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

      <Route path='/'><Home/></Route>
      <Route path='/list'><RestaurantList/></Route>
      <Route path='/create'><RestaurantCreate/></Route>
      <Route path='/search'><RestaurantSearch/></Route>
      
      <Route path='/update'
      render={props=>(
        <RestaurantUpdate {...props}/>)}></Route>
      
      <Route path='/detail'><RestaurantDetail/></Route>
    </Router>
    </div>
  );
}

export default App;
