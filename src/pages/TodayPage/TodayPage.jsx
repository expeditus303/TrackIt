import axios from "axios";
import { baseColor } from "../../constants/colors";
import dayjs from "dayjs";
import Footer from "../../components/Footer/Footer";
import { LoginContext } from "../../contexts/LoginContext";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import TodayHabitCard from "../../components/TodayHabitCard/TodayHabitCard";
import { URL } from "../../constants/url";
import { useContext, useEffect, useState } from "react";

export default function TodayPage() {
  const [todayHabitList, setTodayHabitList] = useState([]);

  const date = dayjs();

  const { token, percentageCompleted, setPercentageCompleted } = useContext(LoginContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promisse = axios.get(URL + "habits/today", config);

    promisse.then(success);
    promisse.catch((err) => console.log(err));
  }, []);

  function success(answer) {
    setTodayHabitList(answer.data);
    const totalHabits = answer.data.length;
    const completedHabits = answer.data.filter((h) => h.done).length;
    const percentage = ((completedHabits / totalHabits) * 100).toFixed(0);
    setPercentageCompleted(percentage);
  }

  function increasePercentageWithoutApi(h) {
    h.done = true
  }

  function decreasePercentageWithoutApi(h) {
    h.done = false
  }

  return (
    <>
      <NavBar />

      <TodayHeader>
        <h2 data-test="today">{date.format("dddd, DD/MM")}</h2>
        <p data-test="today-counter">
          {percentageCompleted == 0 || isNaN(percentageCompleted)
            ? "No habits completed today"
            : `${percentageCompleted}% of habits completed`}
        </p>
      </TodayHeader>

      {todayHabitList.map((h) => (
        <TodayHabitCard
          key={h.id}
          id={h.id}
          name={h.name}
          currentSequence={h.currentSequence}
          highestSequence={h.highestSequence}
          done={h.done}
          todayHabitList={todayHabitList}
          setPercentageCompleted={setPercentageCompleted}
          increasePercentageWithoutApi={() => increasePercentageWithoutApi(h)}
          decreasePercentageWithoutApi={() => decreasePercentageWithoutApi(h)}
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
