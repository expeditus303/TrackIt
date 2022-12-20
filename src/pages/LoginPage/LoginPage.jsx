import axios from "axios";
import { useContext, useState } from "react";
import LogoLoginRegister from "../../components/LogoLoginRegister/LogoLoginRegister";
import { LoginContainer } from "./styled";
import { URL } from "../../constants/url";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";

export default function LoginPage() {

  const { setToken, setImage } = useContext(LoginContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  
  
  function login(event) {
    event.preventDefault();

    const loginInfo = {
      email,
      password,
    };

    const promisse = axios.post(URL + "auth/login", loginInfo);
    promisse.then(success);
    promisse.catch((err) => alert(err.response.data.message));
  }

  function success(answer) {
    navigate("/hoje")
    setToken(answer.data.token)
    setImage(answer.data.image)
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
