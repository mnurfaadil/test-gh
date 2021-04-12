import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {
  Accordion,
  Card,
  Tabs,
  Tab,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Table,
  Button
} from 'react-bootstrap';

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="topics">Topics</Nav.Link>
                <Nav.Link href="place">Places</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </header>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/place">
            <Places />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <Button variant="primary" className="mr-2">Primary</Button>
      <Button variant="secondary" className="mr-2">Secondary</Button>
      <Button variant="success" className="mr-2">Success</Button>
      <Button variant="warning" className="mr-2">Warning</Button>
      <Button variant="danger" className="mr-2">Danger</Button>
      <Button variant="info" className="mr-2">Info</Button>
      <Button variant="light" className="mr-2">Light</Button>
      <Button variant="dark" className="mr-2">Dark</Button>
      <Button variant="link" className="mr-2">Link</Button>
    </div>);
}

function About() {
  return (
    <div className="App">
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
                  </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>);
}

function Contact() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <p>
            Lo! in the orient when the gracious light Lifts up his burning head, each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
                       </p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>
            Lo! in the orient when the gracious light Lifts up his burning head, each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
                   </p>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <p>
            Lo! in the orient when the gracious light Lifts up his burning head, each under eye Doth homage to his new-appearing sight, Serving with looks his sacred majesty; And having climb'd the steep-up heavenly hill, Resembling strong youth in his middle age, Yet mortal looks adore his beauty still, Attending on his golden pilgrimage: But when from highmost pitch, with weary car, Like feeble age, he reeleth from the day,
                  </p>
        </Tab>
      </Tabs>
    </div>
  );
}

function Places() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4 mb-4 grid-margin">
            <div className="card h-100">
              <h4 className="card-header">Card Title</h4>
              <div className="card-body">
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              </div>
              <div className="card-footer">
                <Button variant="btn btn-primary">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4 grid-margin">
            <div className="card h-100">
              <h4 className="card-header">Card Title</h4>
              <div className="card-body">
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
              </div>
              <div className="card-footer">
                <Button variant="btn btn-primary">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4 grid-margin">
            <div className="card h-100">
              <h4 className="card-header">Card Title</h4>
              <div className="card-body">
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              </div>
              <div className="card-footer">
                <Button variant="btn btn-primary">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
              <h4 className="card-header">Table</h4>
              <div className="card-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}