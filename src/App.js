import { useState } from 'react';
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
  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };
  let content = (
    <p style={{ textAlign: 'center' }}>No user found!!</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <UserList items={courseGoals} onDeleteItem={deleteItemHandler}></UserList>
    );
  }
  return (
    <div>
      <section id="goal-form">
      <UserForm onAddGoal={addGoalHandler}></UserForm>
      </section>
      <section id="goal-form">
      {content}
      </section>
      
    </div>
  )
}

export default App;
