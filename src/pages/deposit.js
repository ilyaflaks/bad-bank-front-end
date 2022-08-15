import Transaction from "./Transaction";
import { useUserContext, UserContext } from "./context";
import { Yell } from "./context";
import { UserProvider } from "./context";
import { useState, useEffect } from "react";

function Deposit() {
  const { user, setUser } = useUserContext(UserContext);
  const [input, setInput] = useState(0);
  const [total, setTotal] = useState(user[0].balance);
  console.log("In Account. user is: ", user);
  console.log("total state: ", total);

  function handleChange(e) {
    console.log("e.targ,vale: ", e.target.value);
    let value = e.target.value;
    setInput(value);
  }

  function handleDeposit(e) {
    //e.preventDefault();

    user[0].balance = parseInt(user[0].balance) + parseInt(input);

    setTotal(user[0].balance);
  }

  return (
    <div>
      <Transaction
        label="Deposit"
        handleChange={handleChange}
        handleTransact={handleDeposit}
        balance={total}
      />
    </div>
  );
}

export default Deposit;
