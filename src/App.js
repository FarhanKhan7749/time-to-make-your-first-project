import React, { useState } from 'react';
import './App.css';
import UserForm from './Components/User/UserForm/UserForm';
import UserList from './Components/User/UserList/UserList';
function App() {
  const [courseGoals, setCourseGoals] = useState([
  ]);

  const addGoalHandler = (enteredName,enteredAge) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text1: enteredName,text2:enteredAge, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  return (
    <React.Fragment>
      <UserForm onAddGoal={addGoalHandler}></UserForm>
      <UserList items={courseGoals}></UserList>
    </React.Fragment>
  )
}

export default App;
