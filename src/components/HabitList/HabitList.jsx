import styled from "styled-components";
import { weekdays } from "../../WEEKDAYS";


export default function HabitList(props) {
  const { newHabitList } = props;


  return (
    <HabitsListContainer>
      {newHabitList.map((h) => (
        <HabitCard key={h.id}>
          <div>
            <h3>{h.name}</h3>
            <ion-icon name="trash-outline"></ion-icon>
          </div>

          {weekdays.map((w) => (
            <button key={w.id} id={h.days.includes(w.id) ? "selected" : ""}>
              {w.day}
            </button>
          ))}
        </HabitCard>
      ))}
    </HabitsListContainer>
  );
}

const HabitsListContainer = styled.div``;

const HabitCard = styled.div`
  padding: 19px;
  margin-bottom: 10px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  ion-icon {
    width: 15px;
  }

  h3 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    width: 90%;
    word-wrap: break-word;
  }

  ion {
  }

  button {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-style: none;
    font-size: 19.976px;
    font-family: "Lexend Deca";
    line-height: 25px;
    color: #dbdbdb;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  #selected {
    background: #cfcfcf;
    color: #ffffff;
  }
`;
