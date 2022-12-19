import axios from "axios";
import { useState } from "react";
import LogoLoginRegister from "../../components/LogoLoginRegister/LogoLoginRegister";
import { LoginContainer } from "./styled";
import { URL } from "../../constants/url";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  function login(event) {
    event.preventDefault();

    const loginInfo = {
      email,
      password,
    };

    console.log(loginInfo);

    const promisse = axios.post(URL + "auth/login", loginInfo);
    promisse.then((answer) => console.log(answer.data));
    promisse.catch((err) => alert(err.response.data.message));
  }

  return (
    <>
      <LogoLoginRegister />
      <LoginContainer>
        <form onSubmit={login}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
        <Link to={"/cadastro"}>
          <p>Don't have an account yet? Sign Up!</p>
        </Link>
      </LoginContainer>
    </>
  );
}
