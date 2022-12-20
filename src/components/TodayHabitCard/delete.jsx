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
      // setCompletedHabitsState(completedHabitsState - 1);
      // const newCompletedHabits = completedHabitsState - 1;
      // setPercentageCompleted(((newCompletedHabits / totalTasks) * 100).toFixed(0))

      const promisse = axios.post(URL + `/habits/${id}/uncheck`, {}, config)
      promisse.then((answer) => console.log(answer))
      promisse.catch((err) => console.log(err))

      if (highestSequence === currentSequence) {
        setHighestSequenceState(highestSequenceState - 1);
      }
    }
  }