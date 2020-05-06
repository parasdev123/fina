import React from "react";
import { Form, Button, Fade } from "react-bootstrap";
import axios from "axios";
import "./Form.css";
import { Container, Row, Col, Alert } from "react-bootstrap";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      chars_left: 1000,
      max_char: 1000,
      alert: null
    };
  }

  onChange = event => {
    this.setState({ email: event.target.value });
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  responseChange = event => {
    const charCount = event.target.value.length;
    const charLeft = 1000 - charCount;
    this.setState({
      message: event.target.value,
      chars_left: charLeft
    });
  };

  onAlertClose = () => {
    this.setState({
      alert: null
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      message: "",
      chars_left: 1000
    });

    const userResponse = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    this.setState({
      alert: (
        <Alert
          variant="success"
          dismissible
          onClose={this.onAlertClose}
          transition={Fade}
        >
          <p>Resonse Sent</p>
        </Alert>
      )
    });
    let domain = "";
    
    if(process.env.NODE_ENV !== "production") {
      domain = "http://localhost:5000";
    }

    axios
      .post(domain + "/mail", userResponse)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("POST /mail error: " + err));
  };

  render() {
    return (
      <div>
        <div className="check-mark">{this.state.alert}</div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
              name="username"
              value={this.state.email}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Response</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="4"
              placeholder="Your Questions Here"
              name="textarea"
              value={this.state.message}
              onChange={this.responseChange}
              maxLength="1000"
            />
            <p style={{ textAlign: "left" }}>
              Word Limit: {this.state.chars_left}
            </p>
          </Form.Group>
          <Container>
            <Row>
              <Col xs={1.5}>
                <Button variant="primary" type="submit">
                  Submit Response
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default Contact;
