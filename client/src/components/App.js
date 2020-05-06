import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import PageFooter from "./PageFooter";
import HorizontalLine from "./HorizontalLine";
import "./App.css";
import { Container } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Router>
            <CustomNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pages/about" component={About} />
              <Route exact path="/pages/contactus" component={ContactUs} />
              <Route component={NoMatch} />
            </Switch>

            <br />
            <br />
            <br />
            <HorizontalLine />
            <br />
            <div className="footer">
              <PageFooter />
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
