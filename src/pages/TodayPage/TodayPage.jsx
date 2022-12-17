import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import { baseColor } from "../../constants/colors";
import TodayHabitCard from "../../components/TodayHabitCard/TodayHabitCard"
import Footer from "../../components/Footer/Footer";

export default function TodayPage() {
  return (
    <>
      <NavBar />

      <TodayHeader>
        <h2>Monday, 17/12</h2>
        <p>No habits completed today</p>
      </TodayHeader>

      <TodayHabitCard />

      <Footer />
    </>
  );
}

const TodayHeader = styled.div`
  margin: 98px 18px 28px;

  h2 {
    font-size: 22.976px;
    line-height: 29px;
    margin-bottom: 5px;
    color: ${baseColor};
  }

  p {
    font-size: 17.976px;
    color: #bababa;
  }
`;

