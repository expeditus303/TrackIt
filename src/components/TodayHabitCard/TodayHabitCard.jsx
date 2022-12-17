import { useState } from "react";
import styled from "styled-components";

// APAGAR IMPORT ABAIXO

export default function TodayHabitCard(props) {
  const { name, currentSequence, highestSequence, done } = props;

  const [habitCheck, setHabitCheck] = useState(done);

  console.log(habitCheck)

  function habitDone() {
    setHabitCheck(!habitCheck);
  }

  return (
    <>
      <TodayHabitCardContainer habitCheck={habitCheck}>
        <div>
          <h3>{name}</h3>
          <p>Current sequence: {currentSequence} days</p>
          <p>Your record: {highestSequence} days</p>
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

  ion-icon {
    font-size: 69px;
    color: ${(props) => (props.habitCheck ? "#8fc549" : "#d8d7d7")};
  }
`;
