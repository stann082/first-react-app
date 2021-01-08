import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function UserForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var emailValid = false;
    if (email.length === 0) {
      setEmailError("Email is required");
    } else if (email.length < 6) {
      setEmailError("Email should be a minimum of 6 chars");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Email cannot contain spaces");
    } else {
      setEmailError("");
      emailValid = true;
    }

    var passwordValid = false;
    if (password.length === 0) {
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("Password should be a minimum of 6 chars");
    } else if (password.indexOf(" ") >= 0) {
      setPasswordError("Password cannot contain spaces");
    } else {
      setPasswordError("");
      passwordValid = true;
    }

    if (emailValid && passwordValid) {
      alert("Email: " + email + "\nPassword: " + password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {emailError.length > 0 && <Alert variant="danger">{emailError}</Alert>}

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </Form.Group>
        {passwordError.length > 0 && <Alert variant="danger">{passwordError}</Alert>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserForm;
