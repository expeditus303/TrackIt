import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import { baseColor } from "../../constants/colors";
import TodayHabitCard from "../../components/TodayHabitCard/TodayHabitCard";
import Footer from "../../components/Footer/Footer";
import dayjs from "dayjs";

//APAGAR IMPORTS ABAIXO
import { HABITOS_HOJE } from "../../HABITOS_HOJE";
import { useState } from "react";

export default function TodayPage() {
  const totalTasks = HABITOS_HOJE.length;
  const completedHabits = HABITOS_HOJE.filter((h) => h.done).length;
  const percentage = ((completedHabits / totalTasks) * 100).toFixed(0);

  const [percentageCompleted, setPercentageCompleted] = useState(percentage);

  const date = dayjs();


  return (
    <>
      <NavBar />

      <TodayHeader>
        <h2>{date.format("dddd, DD/MM")}</h2>
        <p>
          {completedHabits == 0
            ? "No habits completed today"
            : `${percentageCompleted}% of habits completed`}
        </p>
      </TodayHeader>

      {HABITOS_HOJE.map((h) => (
        <TodayHabitCard
          key={h.id}
          name={h.name}
          currentSequence={h.currentSequence}
          highestSequence={h.highestSequence}
          done={h.done}
        />
      ))}

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
