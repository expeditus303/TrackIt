import styled from "styled-components";
import { accentColor } from "../../constants/colors";

export default function CreateNewHabitForm() {
    return (
        <CreateNewHabitFormContainer>
          <input
            type="text"
            name="habitName"
            placeholder="habit name"
            maxLength={50}
            required
          />

          <button>S</button>
          <button id="selected">M</button>
          <button>T</button>
          <button id="selected">W</button>
          <button>T</button>
          <button>F</button>
          <button>S</button>

          <div className="submitContainer">
            <button id="cancel">Cancel</button>
            <button id="save">Save</button>
          </div>
        </CreateNewHabitFormContainer>
    )
}

const CreateNewHabitFormContainer = styled.form`
  padding: 19px 19px 10px;
  margin-bottom: 29px;

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