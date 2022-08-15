import React from "react";
import { useEffect, useState, useContext } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function Transaction({ label, handleTransact, handleChange, balance }) {
  return (
    <Card
      style={{
        width: "28rem",
      }}
    >
      <Form onSubmit={handleTransact}>
        <FormGroup>
          <h2>{label}</h2>

          <Label for="amount">Current Balance: {balance}</Label>

          <Input
            id="amount"
            placeholder="Enter Amount"
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <Button type="submit" onClick={handleTransact}>
        Submit
      </Button>
    </Card>
  );
}

export default Transaction;
