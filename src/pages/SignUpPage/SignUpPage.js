import LogoLoginRegister from "../../components/LogoLoginRegister/LogoLoginRegister";
import { SignUpContainer } from "./styled";

export default function SignUpPage() {
    return (
        <>
        <LogoLoginRegister />
        <SignUpContainer>
        <form action="">
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="text" name="name" placeholder="name" />
          <input type="url" name="profilePicture" placeholder="profile picture (url link)" />
          
          <button type="submit">Log In</button>
        </form>
        <p><a href="http://">Already have an account? Sign in!</a></p>
        </SignUpContainer>
        </>
    )
}