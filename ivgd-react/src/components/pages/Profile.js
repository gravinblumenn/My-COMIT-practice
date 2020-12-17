import React, { useState } from "react";
import "../../App.css";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError("");

    try {
      await logOut();
      history.push("/LogIn");
    } catch {
      setError("failed to log out");
    }
  }

  return (
    <>
      {/* <Container className = 'd-flex align-items-center justidy-content-center' style={{minHeight: '100vh'}}> */}
      {/* <div className = 'w-100' style={{maxWidth: "400px"}}> */}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/UpdateProfile" className="btn btn-primary w-25 mt-3">
            Update profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
      {/* </div> */}
      {/* </Container> */}
    </>
  );
}
