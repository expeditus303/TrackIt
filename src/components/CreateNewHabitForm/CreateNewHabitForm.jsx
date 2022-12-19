import { useState } from "react";
import styled from "styled-components";
import { accentColor } from "../../constants/colors";
import { weekdays } from "../../WEEKDAYS";

export default function CreateNewHabitForm(props) {
  const { formShowUp, setFormShowUp, newHabitList, setNewHabitList } = props;

  const [selectedDays, setSelectedDays] = useState([]);

  const [newHabitName, setNewHabitName] = useState("");


  function daySelected(d) {
    if (selectedDays.includes(d)) {
      let newArray = selectedDays.filter((f) => f !== d);
      setSelectedDays(newArray);
    } else {
      let newArray = [...selectedDays, d];
      setSelectedDays(newArray);
    }
  }

  function saveHabit() {
    
    if (newHabitName.length === 0) {
      alert("Please, insert a habit.");

    } else if (selectedDays.length === 0) {
      alert("Please, select at least one day for your habit.");
    
    } else {
      const habitInfo = {
        id: newHabitName, //TALVEZ EU TENHA QUE APAGAR
        name: newHabitName,
        days: selectedDays,
      };

      console.log(habitInfo)

      const newArray = [...newHabitList, habitInfo];
      setNewHabitList(newArray);
      setNewHabitName("");
      setSelectedDays([]);
    }
  }

  function cancelHabit() {
    setFormShowUp(false);
    setNewHabitName("");
    setSelectedDays([]);
  }

  return (
    <CreateNewHabitFormContainer formShowUp={formShowUp}>
      <input
        type="text"
        name="habitName"
        placeholder="habit name"
        maxLength={50}
        value={newHabitName}
        onChange={(e) => setNewHabitName(e.target.value)}
      />

      {weekdays.map((w) => (
        <button
          key={w.id}
          onClick={() => daySelected(w.id)}
          id={selectedDays.includes(w.id) ? "selected" : ""}
        >
          {w.day}
        </button>
      ))}

      <div className="submitContainer">
        <button id="cancel" onClick={cancelHabit}>
          Cancel
        </button>
        <button id="save" onClick={saveHabit}>
          Save
        </button>
      </div>
    </CreateNewHabitFormContainer>
  );
}

const CreateNewHabitFormContainer = styled.div`
  padding: 0px 19px 10px;
  margin-top: 19px;
  margin-bottom: 29px;
  display: ${(props) => (props.formShowUp ? "block" : "none")};

  input {
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 11px;
    margin-bottom: 10px;
    font-size: 19.976px;
  }

  input::placeholder {
    font-size: 19.976px;
    color: #dbdbdb;
    font-family: "Lexend Deca";
    vertical-align: auto;
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

  .submitContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-top: 30px;
  }

  #save {
    width: 84px;
    height: 35px;
    background-color: ${accentColor};
    font-size: 15.976px;
    color: #ffffff;
    margin-left: 23px;
    margin-right: 0;
  }

  #cancel {
    width: auto;
    color: ${accentColor};
    font-size: 15.976px;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  }
`;
