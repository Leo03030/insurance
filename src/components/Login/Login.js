import "./Login.css";
import "../Global.module.css";

const Login = (props) => {
  return (
    <main className="SignIn">
      <input placeholder="username" type="text" />
      <input placeholder="password" type="password" />
    </main>
  );
};
export default Login;
