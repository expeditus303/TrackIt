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
      const newSequence = currentSequenceState + 1;
      setCurrentSequenceState(newSequence);
      const newCompleted = completedHabitsState + 1;
      setCompletedHabitsState(newCompleted);
      setPercentageCompleted(((newCompleted / totalTasks) * 100).toFixed(0));

      const promisse = axios.post(URL + `/habits/${id}/check`, {}, config)
      promisse.then((answer) => console.log(answer))
      promisse.catch((err) => console.log(err))

      if (highestSequence === currentSequence) {
        const newHighest = highestSequence + 1;
        setHighestSequenceState(newHighest);
      }

    } else if (habitCheck === true) {
      setHabitCheck(!habitCheck);
      setCurrentSequenceState(currentSequenceState - 1);
      setCompletedHabitsState(completedHabitsState - 1);
      const newCompletedHabits = completedHabitsState - 1;
      setPercentageCompleted(((newCompletedHabits / totalTasks) * 100).toFixed(0))

      const promisse = axios.post(URL + `/habits/${id}/uncheck`, {}, config)
      promisse.then((answer) => console.log(answer))
      promisse.catch((err) => console.log(err))

      if (highestSequence === currentSequence) {
        setHighestSequenceState(highestSequenceState - 1);
      }
    }
  }

  console.log("AQUI")
  console.log(highestSequenceState)

  return (
    <>
      <TodayHabitCardContainer
        habitCheck={habitCheck}
        currentSequenceState={currentSequenceState}
        highestSequenceState={highestSequenceState}
      >
        <div>
          <h3>{name}</h3>
          <p>
            Current sequence:{" "}
            <span className="currentSequence">{currentSequenceState} days</span>
          </p>
          <p>
            Your record:{" "}
            <span className="highestSequence">{highestSequenceState} days</span>
          </p>
        </div>

        <ion-icon name="checkbox" onClick={() => habitDone(id)}></ion-icon>
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
