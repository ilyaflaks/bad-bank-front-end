import BankForm from "./BankForm";

function Login() {
  function handleLogin() {
    console.log("log in attemot");
  }

  return (
    <div>
      <BankForm
        bgcolor="primary"
        label="Log In"
        handle={handleLogin}
        successButton="Success!"
      />
    </div>
  );
}

export default Login;
