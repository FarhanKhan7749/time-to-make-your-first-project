import React from "react";

import RegisterUsers from "../UserItems/UserItem";
import './UserList.css';

const UserList = props => {
    return (
        <ul className="goal-list">
            {props.items.map(user => (
                <RegisterUsers
                key = {user.id}
                id = {user.id}
                onDelete={props.onDeleteItem}
                >{`${user.text1} ( ${user.text2} year old)`}</RegisterUsers>
            ))}
        </ul>
    )
}

export default UserList;