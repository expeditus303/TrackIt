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
  const [completedHabitsState, setCompletedHabitsState] = useState(0);
  const [percentageCompleted, setPercentageCompleted] = useState(0);

  const [refresh, setRefresh] = useState(false);

  const date = dayjs();
  var updateLocale = require("dayjs/plugin/updateLocale");

  dayjs.extend(updateLocale);

  dayjs.updateLocale("en", {
    weekdays: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
  });

  const { token } = useContext(LoginContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promisse = axios.get(URL + "habits/today", config);

    promisse.then(success);
    promisse.catch((err) => console.log(err));
  }, [refresh]);

  function success(answer) {
    setTodayHabitList(answer.data);
    const totalHabits = answer.data.length;
    const completedHabits = answer.data.filter((h) => h.done).length;
    const percentage = ((completedHabits / totalHabits) * 100).toFixed(0);
    console.log(percentage + "%");
    setPercentageCompleted(percentage);
    console.log(answer.data);
  }

  console.log(refresh);

  console.log(percentageCompleted)

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
          completedHabitsState={completedHabitsState}
          setCompletedHabitsState={setCompletedHabitsState}
          // totalTasks={totalTasks}
          todayHabitList={todayHabitList}
          setPercentageCompleted={setPercentageCompleted}
          setRefresh={setRefresh}
          refresh={refresh}
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
