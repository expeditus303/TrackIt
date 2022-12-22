import { NavBarContainer } from "./styled";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const { image, token } = useContext(LoginContext);

  const navigate = useNavigate();

  function exit() {
    localStorage.removeItem("tokenLocal");
    localStorage.removeItem("image");
    navigate("/");
  }

  return (
    <NavBarContainer>
      <Link to={token ? "/hoje" : "/"}>
        <h1>TrackIt</h1>
      </Link>
      <div className="container">
        <img src={image} alt=""  />

        <div className="overlay" onClick={exit}>
          <p className="text">exit</p>
        </div>
      </div>
    </NavBarContainer>
  );
}
