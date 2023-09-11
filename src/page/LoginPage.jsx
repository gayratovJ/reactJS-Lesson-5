import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./index.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (user.username === "jokh" && user.password === "1706") {
      navigate("/debts");
    } else {
      toast.error("Not true password or name");
    }
  };
  const handelUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  return (
    <div className="vh-100 d-flex phone">
      <Form onSubmit={submit}>
        <Form.Group>
          User Name- jokh
          <br />
          Password - 1706
        </Form.Group>
        <Form.Group controlId="username" md="4">
          <Form.Label>User name</Form.Label>
          <Form.Control
            value={user.username}
            onChange={handelUser}
            required
            type="text"
            placeholder="User name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password" md="4">
          <Form.Label>Password</Form.Label>

          <Form.Control
            value={user.password}
            required
            type="password"
            placeholder="password"
            onChange={handelUser}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button className="mt-3" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
