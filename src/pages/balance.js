import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useUserContext, UserContext } from "./context";
import { Yell } from "./context";
import { UserProvider } from "./context";

function Balance() {
  const d = new Date();
  let year = d.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[d.getMonth()];
  let date = d.getDate();

  const { user, setUser } = useUserContext(UserContext);

  let name = user[0].name;
  let balance = user[0].balance;
  return (
    <div>
      <Card
        style={{
          width: "28rem",
        }}
      >
        <CardTitle>Balance</CardTitle>
        <CardSubtitle>{name}</CardSubtitle>
        <CardBody>
          As of {date} {month} {year}, your balance is: {balance}
        </CardBody>
      </Card>
    </div>
  );
}

export default Balance;
