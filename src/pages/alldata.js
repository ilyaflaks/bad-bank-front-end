import { useContext } from "react";
import { useUserContext, UserContext, UserProvider } from "./context";
import { Yell } from "./context";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function Alldata() {
  return (
    <div>
      {/* <UserProvider> */}
      <UserAccountData />
      {/* </UserProvider> */}
    </div>
  );
}

function UserAccountData() {
  const { user, setUser } = useUserContext();
  // let stringyUser = JSON.stringify(user);
  // console.log("user 0 " + user[0]);
  // console.log("user 0 name " + user[0].name);
  // console.log("we are in allData, userContext is: " + stringyUser);

  const context = useContext(UserContext);
  console.log("inside all data");
  console.log(context);
  console.log("ctxt.user: ", context.user);

  return (
    <div>
      All data
      <br />
      {user.map((u, index) => {
        return (
          <Card key={index}>
            <CardTitle>{u.name}</CardTitle>
            <CardBody>
              Email: {u.email}
              <br />
              Password: {u.password}
              <br />
              Balance: {u.balance}
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default Alldata;
