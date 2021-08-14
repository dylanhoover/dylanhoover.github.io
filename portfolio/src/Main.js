import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import CourseWork from "./CourseWork";
import Contact from "./Contact";
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { hasBasename } from "history/PathUtils";
import Experience from "./Experience";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/experience">Experience</NavLink></li>
            <li><NavLink to="/course-work">Course Work</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <h1>Dylan Hoover</h1>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/course-work" component={CourseWork}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/experience" component={Experience}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

// class Main extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <div>
//           <Navbar bg="light" expand="lg">
//             <Container>
//               <Navbar.Brand>
//                 <NavLink exact to="/">Dylan Hoover</NavLink>
//               </Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                   <Nav.Link href="#home">Home</Nav.Link>
//                   <Nav.Link href="#link">Link</Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//           <h1>Dylan Hoover</h1>
//           <div className="content">
//             <Route exact path="/" component={Home} />
//             <Route path="/course-work" component={CourseWork} />
//             <Route path="/contact" component={Contact} />
//           </div>
//         </div>
//       </HashRouter>
//     );
//   }
// }

export default Main;
