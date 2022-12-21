import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { baseColor } from "../../constants/colors";

export default function History() {
  return (
    <>
      <NavBar />

      <HistoryContainer>
        <h2>History</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </HistoryContainer>

      <Footer />
    </>
  );
}

const HistoryContainer = styled.div`
  margin: 98px 18px 28px;

  h2 {
    font-size: 22.976px;
    line-height: 29px;
    margin-bottom: 17px;
    color: ${baseColor};
  }

  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
