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
    setPercentageCompleted,
    todayHabitList,
    increasePercentageWithoutApi,
    decreasePercentageWithoutApi
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
    if (done === false) {
      setHabitCheck(!habitCheck);
      
      const newSequence = currentSequenceState + 1
      setCurrentSequenceState(newSequence)

      const newHighest = highestSequenceState + 1
      setHighestSequenceState(newHighest)

      increasePercentageWithoutApi()

      const totalHabits = todayHabitList.length;
      let completedHabits = todayHabitList.filter((h) => h.done).length;

      const percentage = ((completedHabits / totalHabits) * 100).toFixed(0);

      setPercentageCompleted(percentage);

      const promisse = axios.post(URL + `/habits/${id}/check`, {}, config)
      promisse.then((answer) => console.log(answer.data))
      promisse.catch((err) => console.log(err))

    } else if (done === true) {
      setHabitCheck(!habitCheck);

      const newSequence = currentSequenceState - 1
      setCurrentSequenceState(newSequence)

      const newHighest = highestSequenceState - 1
      setHighestSequenceState(newHighest)

      decreasePercentageWithoutApi()

      const totalHabits = todayHabitList.length;
      let completedHabits = todayHabitList.filter((h) => h.done).length;

      const percentage = ((completedHabits / totalHabits) * 100).toFixed(0);

      setPercentageCompleted(percentage);

      const promisse = axios.post(URL + `/habits/${id}/uncheck`, {}, config)
      promisse.then((answer) => console.log(answer.data))
      promisse.catch((err) => console.log(err))
    }
  }



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

        <ion-icon name="checkbox" onClick={() => habitDone(id, done, todayHabitList)}></ion-icon>
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
