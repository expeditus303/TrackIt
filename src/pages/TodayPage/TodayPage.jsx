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

//APAGAR IMPORTS ABAIXO
import { HABITOS_HOJE } from "../../HABITOS_HOJE";

export default function TodayPage() {
  const [ todayHabitList, setTodayHabitList] = useState([])
  const [completedHabitsState, setCompletedHabitsState] = useState()
  const [percentageCompleted, setPercentageCompleted] = useState();

  let totalTasks = todayHabitList.length;
  let completedHabits = todayHabitList.filter((h) => h.done).length;
  // let percentage = ((completedHabits / totalTasks) * 100).toFixed(0);
  
  const { token } = useContext(LoginContext)

  const date = dayjs();

  useEffect(() => {
    const config ={
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    }
    
    const promisse = axios.get(URL + "habits", config)

    promisse.then((answer) => setTodayHabitList(answer.data))
    promisse.catch((err) => console.log(err))
  }, [])

  console.log("aqui embaixo o token")
  console.log(token)

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

      {todayHabitList.map((h) => (
        <TodayHabitCard
          key={h.id}
          name={h.name}
          currentSequence={h.currentSequence}
          highestSequence={h.highestSequence}
          done={h.done}
          completedHabitsState={completedHabitsState}
          setCompletedHabitsState={setCompletedHabitsState}
          totalTasks={totalTasks}
          setPercentageCompleted={setPercentageCompleted}
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
