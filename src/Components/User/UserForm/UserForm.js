import React, { useRef, useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from './UserForm.module.css'
import ErrorModal from "../../UI/ErrorModal";
const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collageInputRef = useRef();
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredCollage = collageInputRef.current.value;  
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge,enteredCollage);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collageInputRef.current.value = '';
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        //value={enteredUsername}
                        ref={nameInputRef}
                        //onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        //value={enteredAge}
                        ref={ageInputRef}
                        //onChange={ageChangeHandler}
                    />
                    <label htmlFor="college">Collage Name</label>
                    <input
                        id="collage"
                        type="text"
                        //value={enteredAge}
                        ref={collageInputRef}
                        //onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
}

export default UserForm;