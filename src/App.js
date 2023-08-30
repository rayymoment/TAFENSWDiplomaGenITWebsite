import { FirebaseConfig } from "./config/Config";
import { initializeApp } from "firebase/app";

import "react-bootstrap/Container"
import "react-bootstrap/Navbar"
import "react-bootstrap/Nav"
import './App.css';
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap/esm";

function App() {
  const FBapp = initializeApp(FirebaseConfig);
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>App</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
        <h1>React App - Test Change</h1>
        </div>
      );
  }


export default App;
