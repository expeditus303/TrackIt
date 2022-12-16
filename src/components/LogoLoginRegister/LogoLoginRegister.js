import logo from "../../assets/logo.png"
import { LogoContainer } from "./styled"

export default function LogoLoginRegister() {
    return (
        <LogoContainer>
        <img src={logo} alt="TrackIt Logo" />
        </LogoContainer>
    )
}