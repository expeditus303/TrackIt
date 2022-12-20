import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { URL } from "../../constants/url";
import { LoginContext } from "../../contexts/LoginContext";

// APAGAR IMPORT ABAIXO

export default function TodayHabitCard(props) {
  const {
    id,
    name,
    currentSequence,
    highestSequence,
    done,
    completedHabitsState,
    setCompletedHabitsState,
    totalTasks,
    setPercentageCompleted,
    todayHabitList,
    setRefresh,
    refresh
  } = props;

  const [habitCheck, setHabitCheck] = useState(done);
  const [currentSequenceState, setCurrentSequenceState] = useState(currentSequence);
  const [highestSequenceState, setHighestSequenceState] = useState(highestSequence);

  const { token } = useContext(LoginContext)

  const config = {
    headers: {
      "Authorization" : `Bearer ${token}`
    }
  }

  function habitDone(id) {
    if (habitCheck === false) {
      setHabitCheck(!habitCheck);
      
      const newSequence = currentSequence + 1
      setCurrentSequenceState(newSequence)

      const newHighest = highestSequence + 1
      setHighestSequenceState(newHighest)

      const promisse = axios.post(URL + `/habits/${id}/check`, {}, config)
      promisse.then((answer) => setRefresh(!refresh))
      promisse.catch((err) => console.log(err))

    } else if (habitCheck === true) {
      setHabitCheck(!habitCheck);

      const newSequence = currentSequence - 1
      setCurrentSequenceState(newSequence)

      const newHighest = highestSequence - 1
      setHighestSequenceState(newHighest)
      
      const promisse = axios.post(URL + `/habits/${id}/uncheck`, {}, config)
      promisse.then((answer) => setRefresh(!refresh))
      promisse.catch((err) => console.log(err))
    }
  }


  return (
    <>
      <TodayHabitCardContainer
        habitCheck={habitCheck}
        currentSequenceState={currentSequenceState}
        highestSequenceState={highestSequenceState}
        data-test="today-habit-container"
      >
        <div>
          <h3 data-test="today-habit-name">{name}</h3>
          <p data-test="today-habit-sequence">
            Current sequence:{" "}
            <span className="currentSequence">{currentSequenceState} days</span>
          </p>
          <p data-test="today-habit-record">
            Your record:{" "}
            <span className="highestSequence">{highestSequenceState} days</span>
          </p>
        </div>

        <ion-icon name="checkbox" onClick={() => habitDone(id)} data-test="today-habit-check-btn"></ion-icon>
      </TodayHabitCardContainer>
    </>
  );
}

const TodayHabitCardContainer = styled.div`
  margin: 18px 18px 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 230px;
    word-wrap: break-word;
  }

  h3 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }

  p {
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }

  .currentSequence {
    color: ${(props) => (props.habitCheck ? "#8fc549" : "#666666")};
  }

  .highestSequence {
    color: ${(props) => 
      props.currentSequenceState === props.highestSequenceState && props.highestSequenceState !== 0 ? "#8fc549" : "#666666"};
  }

  ion-icon {
    font-size: 69px;
    color: ${(props) => (props.habitCheck ? "#8fc549" : "#d8d7d7")};
  }
`;
