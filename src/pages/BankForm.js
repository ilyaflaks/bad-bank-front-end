import React from "react";
import { useEffect, useState, useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function BankForm({ bgcolor, label, handle, successButton }) {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log("handlecreate called");
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    //REPLACE
    //    ctx.user.push({ name, email, password, balance: 100 });
    //WITH
    handle({ name, email, password });

    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }
  return (
    <div>
      <Card
        style={{
          width: "28rem",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">{label}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Please fill out the form below
          </CardSubtitle>
          {/* <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText> */}
          {show ? (
            <div className="mb-3">
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              Email Address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              Password <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
          ) : (
            <div>
              <h1>
                Thank you for creating an account with BadBank! Here's $100 just
                for signing up! This is just on of the many benefits of doing
                your banking with BadBank!
              </h1>
              <br />
            </div>
          )}
          {show ? (
            <Button
              type="submit"
              className="btn btn-dark"
              onClick={handleCreate}
            >
              {label}
            </Button>
          ) : (
            <h3>Please Log in to access your new account</h3>
          )}
        </CardBody>
      </Card>
    </div>
  );

  {
    /* <Card
      bgcolor={bgcolor}
      header={label}
      status={status}
        <CardBody>
        show ? (
          <>
            <div className="mb-3">
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              Email Address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              Password <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
              >
                Create Account
              </button>
            </div>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              {successButton}
            </button>
          </>
        )
      
        </CardBody>
    />
  ); */
  }
}

export default BankForm;
