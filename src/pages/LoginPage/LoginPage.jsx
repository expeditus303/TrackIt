import axios from "axios";
import { useContext, useState } from "react";
import LogoLoginRegister from "../../components/LogoLoginRegister/LogoLoginRegister";
import { LoginContainer } from "./styled";
import { URL } from "../../constants/url";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
  const { token, setToken, setImage } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();

    setToken(undefined);

    const loginInfo = {
      email,
      password,
    };

    const promisse = axios.post(URL + "auth/login", loginInfo);
    promisse.then(success);
    promisse.catch(error);
  }

  function success(answer) {
    navigate("/hoje");
    localStorage.setItem("tokenLocal", answer.data.token)
    setToken(localStorage.getItem("tokenLocal"));
    
    localStorage.setItem("image", answer.data.image)
    setImage(localStorage.getItem("image"));
  }

  function error(err) {
    alert(err.response.data.message)
    setToken("")
  }

  if (token === undefined) {
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
              disabled
              
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled
            />
            <button type="submit" disabled>
              {" "}
              <ThreeDots
                height="25.969"
                width="80"
                radius="9"
                color="white"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </button>
          </form>
          <Link to={"/cadastro"}>
            <p>Don't have an account yet? Sign Up!</p>
          </Link>
        </LoginContainer>
      </>
    );
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
