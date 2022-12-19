import { useState } from "react";
import styled from "styled-components";

// APAGAR IMPORT ABAIXO

export default function TodayHabitCard(props) {
  const {
    name,
    currentSequence,
    highestSequence,
    done
  } = props;

  const [habitCheck, setHabitCheck] = useState(false);
  const [currentSequenceState, setCurrentSequenceState] = useState(currentSequence)
  const [highestSequenceState, setHighestSequenceState] = useState(highestSequence)


  function habitDone() {
    if (habitCheck === false) {
      setHabitCheck(!habitCheck);
      const newSequence = currentSequenceState + 1
      setCurrentSequenceState(newSequence)

      if (highestSequence === currentSequence) {
        const newHighest = highestSequence + 1
        setHighestSequenceState(newHighest)
      }

    } else if (habitCheck === true) {
      setHabitCheck(!habitCheck);
      setCurrentSequenceState(currentSequenceState - 1)
      setHighestSequenceState(highestSequenceState - 1)
    }
    
  }

  console.log(currentSequence)
  console.log(highestSequence)

  return (
    <>
      <TodayHabitCardContainer habitCheck={habitCheck} currentSequence={currentSequence} highestSequence={highestSequence} >
        <div>
          <h3>{name}</h3>
          <p>Current sequence: <span className="currentSequence">{currentSequenceState} days</span></p>
          <p>Your record: <span className="highestSequence">{highestSequenceState} days</span> </p>
        </div>

        <ion-icon name="checkbox" onClick={() => habitDone()}></ion-icon>
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

  .currentSequence{
    color: ${(props) => (props.habitCheck ? "#8fc549" : "#666666")};
  }

  .highestSequence{
    color: ${(props) => (props.currentSequence === props.highestSequence ? "#8fc549" : "#666666")};
  }

  ion-icon {
    font-size: 69px;
    color: ${(props) => (props.habitCheck ? "#8fc549" : "#d8d7d7")};
  }
`;