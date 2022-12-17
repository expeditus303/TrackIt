import styled from "styled-components";

export default function TodayHabitCard() {
  return (
    <>
      <TodayHabitCardContainer>
        <div>
          <h3>Read one chapter of a book</h3>
          <p>Current sequence: 3 days</p>
          <p>Your record: 5 days</p>
        </div>

        <ion-icon name="checkbox"></ion-icon>
      </TodayHabitCardContainer>

      <TodayHabitCardContainer>
        <div>
          <h3>Read one chapter of a book</h3>
          <p>Current sequence: 3 days</p>
          <p>Your record: 5 days</p>
        </div>

        <ion-icon name="checkbox"></ion-icon>
      </TodayHabitCardContainer>

      <TodayHabitCardContainer>
        <div>
          <h3>Read one chapter of a book</h3>
          <p>Current sequence: 3 days</p>
          <p>Your record: 5 days</p>
        </div>

        <ion-icon name="checkbox"></ion-icon>
      </TodayHabitCardContainer>

      <TodayHabitCardContainer>
        <div>
          <h3>Read one chapter of a book</h3>
          <p>Current sequence: 3 days</p>
          <p>Your record: 5 days</p>
        </div>

        <ion-icon name="checkbox"></ion-icon>
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
    color: #8FC549;
  }
`;
