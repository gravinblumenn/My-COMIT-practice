import React, { useRef, useState } from "react";
import "../../App.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import { Form, Button, Card, Alert } from "react-bootstrap";

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function handleSubmitLogIn(event) {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push("/Profile");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={handleSubmitLogIn}>
            <Form.Group id="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 " type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgotPassword">Forgot password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/SignUp">Sign Up</Link>
      </div>
    </>
  );
}
