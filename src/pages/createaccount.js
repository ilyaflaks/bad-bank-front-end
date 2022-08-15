import BankForm from "./BankForm";
import { useContext } from "react";
import { useUserContext, UserContext } from "./context";
import { UserProvider } from "./context";

function CreateAccount() {
  return <Account />;
}
function Account() {
  const { user, setUser } = useUserContext();
  console.log("In Account. user is: ", user);

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
    </div>
  );
}

export default CreateAccount;
