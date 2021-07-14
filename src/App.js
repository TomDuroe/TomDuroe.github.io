import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './view'
import Add from './Add'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

function App(){
  const [listItems, clistItems] = useState([
    {id: 1, task: "make static data", completed: true },
    {id: 2, task: "make dynamic data", completed: false },
  ]);
  useEffect(() => {
    const listContents = localStorage.getItem("list")
    clistItems(
      JSON.parse(listContents) || []
    )
  }, [])
  const updateListItems = (id, task, complete) => {
    const listItem = {id, task, complete}
    clistItems((state) => [...state, listItem], localStorage.setItem(
      "list",
      JSON.stringify([...listItems, listItem])))
  }
    return (
      <Router>
      <Navbar bg="light" expand="md">
        <Navbar.Brand>Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classname="mr-auto">
            <Link className="nav-link" to="/">View</Link>
            <Link className="nav-link" to="add">Add</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Container>
          <Switch>
            <Route path="/add">
              <Add onSubmut={(id, description, completed) =>
                updateListItems(id, description, completed)} />
            </Route>
            <Route exact path="/">
              <View todos={listItems} />
            </Route>
            <Route path="/">
              Error: 404 not found
            </Route>
          </Switch>
        </Container>
        </Router>
    );

}
export default App;
