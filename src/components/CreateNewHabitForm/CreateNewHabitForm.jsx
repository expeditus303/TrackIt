import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { accentColor } from "../../constants/colors";
import { URL } from "../../constants/url";
import { LoginContext } from "../../contexts/LoginContext";
import { weekdays } from "../../constants/WEEKDAYS";
import { ThreeDots } from "react-loader-spinner";

export default function CreateNewHabitForm(props) {
  const { formShowUp, setFormShowUp, newHabitList, setNewHabitList } = props;

  const { token } = useContext(LoginContext);

  const [selectedDays, setSelectedDays] = useState([]);

  const [newHabitName, setNewHabitName] = useState("");

  const [loading, setLoading] = useState("");

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
    // if (newHabitName.length === 0) {
    //   alert("Please, insert a habit.");
    // } else if (selectedDays.length === 0) {
    //   alert("Please, select at least one day for your habit.");
    // } else {
      setLoading(undefined);

      const habitInfoSent = {
        name: newHabitName,
        days: selectedDays,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const promisse = axios.post(URL + "habits", habitInfoSent, config);
      promisse.then(success);
      promisse.catch((err) => alert(err.response.data));
    // }
  }

  function success(answer) {
    const newArray = [...newHabitList, answer.data]
    setNewHabitList(newArray)
    console.log(answer.data)
    setNewHabitName("");
    setSelectedDays([]);
    setFormShowUp(false);
    setLoading("")
  }

  function cancelHabit() {
    setFormShowUp(false);
  }

  if (loading === undefined) {
    return (
      <CreateNewHabitFormContainer formShowUp={formShowUp}>
        <input
          type="text"
          name="habitName"
          placeholder="habit name"
          maxLength={50}
          value={newHabitName}
          onChange={(e) => setNewHabitName(e.target.value)}
          disabled
        />

        {weekdays.map((w) => (
          <button
            key={w.id}
            onClick={() => daySelected(w.id)}
            id={selectedDays.includes(w.id) ? "selected" : ""}
            disabled
          >
            {w.day}
          </button>
        ))}

        <div className="submitContainer">
          <button id="cancel" disabled onClick={cancelHabit}>
            Cancel
          </button>
          <button id="save" disabled onClick={saveHabit}>
            <ThreeDots
              height="25.969"
              width="80"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </button>
        </div>
      </CreateNewHabitFormContainer>
    );
  }

  return (
    <CreateNewHabitFormContainer formShowUp={formShowUp} data-test="habit-create-container">
      <input
        type="text"
        name="habitName"
        placeholder="habit name"
        maxLength={50}
        value={newHabitName}
        onChange={(e) => setNewHabitName(e.target.value)}
        data-test="habit-name-input"
      />

      {weekdays.map((w) => (
        <button
          key={w.id}
          onClick={() => daySelected(w.id)}
          id={selectedDays.includes(w.id) ? "selected" : ""}
          data-test="habit-day"
        >
          {w.day}
        </button>
      ))}

      <div className="submitContainer">
        <button id="cancel" onClick={cancelHabit} data-test="habit-create-cancel-btn">
          Cancel
        </button>
        <button id="save" onClick={saveHabit} data-test="habit-create-save-btn">
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
    display: flex;
    justify-content: center;
    align-items: center;
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
