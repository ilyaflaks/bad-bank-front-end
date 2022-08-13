import BankForm from "./BankForm";
import { useContext } from "react";
import { useUserContext, UserContext } from "./context";
//import { Yell } from "./context";
import { UserProvider } from "./context";

function CreateAccount() {
  return (
    // <UserProvider>
    <Account />
    // </UserProvider>
  );
}
function Account() {
  const { user, setUser } = useUserContext();
  console.log("In Account. user is: ", user);

  // let newUser = {
  //   name: "Yeh",
  //   email: "yesh@weh",
  //   password: "password",
  //   balance: "10",
  // };

  // function addUser(name, email, password, balance) {
  //   setUser([...user, newUser]);
  // }

  // const context = useContext(UserContext);
  function handle(data) {
    console.log("handle from createaccount called");
    setUser([
      ...user,
      {
        name: data.name,
        email: data.email,
        password: data.password,
        balance: 100,
      },
    ]);

    // context.user.push({
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    //   balance: 100,
    // });

    return true;
  }

  return (
    <div>
      <BankForm
        bgcolor="primary"
        label="Create Account"
        handle={handle}
        successButton="Add another account"
      />
      {/* <div>
        <h1>{user[0].name}</h1>
        <h1>{user[0].email}</h1>
        <h1>{user[0].password}</h1>
        <h1>{user[0].balance}</h1>

        <button onClick={addUser}>Activate Users</button>
        <h1>{user[2]?.name}</h1>
        <h1>{user[2]?.email}</h1>
        <h1>{user[2]?.password}</h1>
        <h1>{user[2]?.balance}</h1>
      </div> */}
    </div>
  );
}

export default CreateAccount;
