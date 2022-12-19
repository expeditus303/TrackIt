import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import LogoLoginRegister from "../../components/LogoLoginRegister/LogoLoginRegister";
import { SignUpContainer } from "./styled";
import { URL } from "../../constants/url";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function signUp(event) {
    event.preventDefault()
    
    const registerInfo = {
      email,
      name,
      image,
      password
    }

    const promisse = axios.post(URL + "auth/sign-up", registerInfo)
    promisse.then(success)
    promisse.catch(errors)
  }

  function success(answer) {
    alert(`Welcome to Track It, ${name}!`)

    Navigate
  }

  function errors(err) {
    if (err.response.status === 409) {
      alert("Email address is already registered!")
    } else if (err.response.status === 422) {
      alert("Please, enter a valid email address")
    } else {
      alert("Error, please try again")
    }
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
