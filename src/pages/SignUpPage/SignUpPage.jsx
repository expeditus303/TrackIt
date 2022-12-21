import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LogoLoginRegister from "../../components/LogoLoginRegister/LogoLoginRegister";
import { SignUpContainer } from "./styled";
import { URL } from "../../constants/url";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  function signUp(event) {
    event.preventDefault();

    setLoading(undefined);

    const registerInfo = {
      email,
      name,
      image,
      password,
    };

    const promisse = axios.post(URL + "auth/sign-up", registerInfo);
    promisse.then(success);
    promisse.catch(errors);
  }

  function success(answer) {
    alert(`Welcome to Track It, ${name}!`);
    setLoading("");
    return navigate("/");
  }

  function errors(err) {
    setLoading("")
    if (err.response.status === 409) {
      alert("Email address is already registered!");
    } else if (err.response.status === 422) {
      alert("Please, enter a valid email address");
    } else {
      alert("Error, please try again");
    }
  }

  if (loading === undefined) {
    return (
      <>
        <LogoLoginRegister />

        <SignUpContainer>
          <form onSubmit={signUp}>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled
            />

            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled
            />
            <input
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled
            />
            <input
              type="url"
              name="profilePicture"
              placeholder="profile picture (url link)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              disabled
            />

<<<<<<< HEAD
            <button type="submit" disabled data-test="signup-btn">
=======
            <button type="submit">
>>>>>>> parent of 315a638 (data test 1)
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
          <Link to={"/"}>
            <p>Already have an account? Sign in!</p>
          </Link>
        </SignUpContainer>
      </>
    );
  }

  return (
    <>
      <LogoLoginRegister />

      <SignUpContainer>
        <form onSubmit={signUp}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="url"
            name="profilePicture"
            placeholder="profile picture (url link)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />

          <button type="submit">Create an account</button>
        </form>
        <Link to={"/"}>
          <p>Already have an account? Sign in!</p>
        </Link>
      </SignUpContainer>
    </>
  );
}
