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
  const [ todayHabitList, setTodayHabitList] = useState([])
  const [completedHabitsState, setCompletedHabitsState] = useState(0)
  const [percentageCompleted, setPercentageCompleted] = useState();

  let totalTasks = todayHabitList.length;
  let completedHabits = todayHabitList.filter((h) => h.done).length;
  console.log(completedHabits)
  // let percentage = ((completedHabits / totalTasks) * 100).toFixed(0);
  
  const date = dayjs();

  const { token } = useContext(LoginContext)

  useEffect(() => {
    const config ={
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    }
    
    const promisse = axios.get(URL + "habits/today", config)

    promisse.then((answer) => setTodayHabitList(answer.data))
    promisse.catch((err) => console.log(err))
  }, [])


  return (
    <>
      <NavBar />

      <TodayHeader>
        <h2>{date.format("dddd, DD/MM")}</h2>
        <p>
          {completedHabitsState == 0
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
