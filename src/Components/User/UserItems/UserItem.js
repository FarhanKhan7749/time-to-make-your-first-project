import React from "react";

import './UserItems.css';

const RegisterUsers = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    };
    
    return(
        <li className="user-item" onClick={deleteHandler}>
            {props.children}
        </li>
    )
}

export default RegisterUsers;