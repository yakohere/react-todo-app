
import { useState } from "react";
import Button from "./Button";
import { Input } from "./Todos";

const Todo = (props) => {
    const [isEditing, setIsEditing] = useState(false);


    const pressHandler = (e) => {
        if (e.key === "Enter") {
            props.changeTodo(e.target.value);
            setIsEditing(false);
        }
    }

    return (
        <div style={todoStyle}>
            <p>{props.name}</p>
            <Button buttonClicked={props.removeTodo} name="Remove" />
            <Button editButton={true} buttonClicked={() => setIsEditing(!isEditing)} name="Edit" />

            {
                isEditing && <Input onKeyPress={pressHandler} defaultValue={props.name} style={{ margin: "10px auto" }} />
            }
        </div>
    )
}

export default Todo;

const todoStyle = {
    backgroundColor: 'white',
    textAlign: "center",
    padding: "2px 0",
    fontWeight: "bold",
    marginBottom: "15px",
    borderRadius: "10px"
}