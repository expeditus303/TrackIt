import { useState } from "react";
import styled from "styled-components";
import CreateNewHabitForm from "../../components/CreateNewHabitForm/CreateNewHabitForm";
import Footer from "../../components/Footer/Footer";
import HabitList from "../../components/HabitList/HabitList";
import NavBar from "../../components/NavBar/NavBar";
import { accentColor, baseColor } from "../../constants/colors";

export default function HabitsPage(props) {

  const { HABITOS_USUARIO } = props;

  const [formShowUp, setFormShowUp] = useState(false);

  const [newHabitList, setNewHabitList] = useState(HABITOS_USUARIO)

  return (
    <>
      <NavBar />

      <MyHabitsContainer>
        <MyHabitsHeader>
          <h2>My habits</h2>
          <button onClick={() => setFormShowUp(!formShowUp)}>+</button>
        </MyHabitsHeader>

        <CreateNewHabitForm formShowUp={formShowUp} setFormShowUp={setFormShowUp} newHabitList={newHabitList} setNewHabitList={setNewHabitList}/>

        <DontHaveHabitsText HABITOS_USUARIO={HABITOS_USUARIO}>
          You don't have any habits registered.<br></br>
          Add a habit to start tracking!
        </DontHaveHabitsText>

        <HabitList newHabitList={newHabitList} setNewHabitList={setNewHabitList}/>
      </MyHabitsContainer>

      <Footer />
    </>
  );
}

const MyHabitsContainer = styled.div`
  margin: 98px 18px 114px;
`;

const DontHaveHabitsText = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: #666666;
  margin-top: 19px;
  display: ${(props) => (props.HABITOS_USUARIO.length > 0 ? "none" : "block")};
`;

const MyHabitsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: ${baseColor};
  }

  button {
    width: 40px;
    height: 35px;
    background: ${accentColor};
    border-radius: 4.63636px;
    border-style: none;
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
  }
`;
