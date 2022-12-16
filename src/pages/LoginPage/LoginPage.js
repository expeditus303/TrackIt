import LogoLoginRegister from "../../components/LogoLoginRegister/LogoLoginRegister";
import { LoginContainer } from "./styled";

export default function LoginPage() {
  return (
    <>
      <LogoLoginRegister />
      <LoginContainer>
        <form action="">
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Log In</button>
        </form>
        <p><a href="http://">Don't have an account yet? Sign Up!</a></p>
      </LoginContainer>
    </>
  );
}
