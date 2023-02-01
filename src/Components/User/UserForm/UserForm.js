import React, { useState } from "react";
import Button from "../../UI/Button";

import './UserForm.css'

const UserForm = (props) => {
    const [userEnteredValue, setUserEnteredValue] = useState('');
    const [ageEnteredValue, setAgeEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const userInputChnageHandler = (event) =>{
        if(event.target.value.trim().length > 0){
            setIsValid(true);
          }
        setUserEnteredValue(event.target.value)
    }

    const ageInputChnageHandler = (event) =>{
        setAgeEnteredValue(event.target.value)
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if(userEnteredValue.trim().length === 0 || ageEnteredValue.trim().length === 0){
            setIsValid(false);
            return;
          }
        props.onAddGoal(userEnteredValue,ageEnteredValue);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isValid ? 'invalid':''}`}>
                <div>
                    <label>User</label>
                    <input type="text" onChange={userInputChnageHandler} ></input>
                </div>
                <div>
                    <label >Age (Years)</label>
                    <input type="number" onChange={ageInputChnageHandler}></input>
                </div>
            </div>
            <Button className={`${!isValid ? 'invalid':''}`} type="submit">Add User</Button>
        </form>
    )
}

export default UserForm;