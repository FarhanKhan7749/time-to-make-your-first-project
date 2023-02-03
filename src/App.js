import React, { useState } from 'react';
import './App.css';
import UserForm from './Components/User/UserForm/UserForm';
import UserList from './Components/User/UserList/UserList';
function App() {
  const [courseGoals, setCourseGoals] = useState([
  ]);

  const addGoalHandler = (enteredName,enteredAge,enteredCollage) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ name: enteredName, age:enteredAge,collage:enteredCollage, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  return (
    <React.Fragment>
      <UserForm onAddUser={addGoalHandler}></UserForm>
      <UserList items={courseGoals}></UserList>
    </React.Fragment>
  )
}

export default App;
