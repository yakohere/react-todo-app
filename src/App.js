import { useState, useRef } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';


const App = () => {
    const [todosState, setTodosState] = useState(
        localStorage.getItem("todos") ?
            localStorage.getItem("todos").split(",")
            :
            []
    )

    const writeTodoValue = useRef("");

    const keyPressedHandler = (e) => {
        if (e.key === "Enter") {
            let updatedItem = [writeTodoValue.current.value, ...todosState];

            setTodosState(updatedItem);
            localStorage.setItem("todos", updatedItem);
            writeTodoValue.current.value = "";
        }
    }

    const removeTodo = (index) => {
        const filteredState = todosState.filter((e, i) => i !== index);
        setTodosState(filteredState);
        localStorage.setItem("todos", filteredState);
    }

    const changeTodo = (value, index) => {
        const stateCopy = [...todosState];

        stateCopy[index] = value;
        // stateCopy.splice(index, 1, value)
        setTodosState(stateCopy);
        localStorage.setItem("todos", stateCopy);
    }

    return (
        <div className="App">

            <Todos
                todosFromApp={todosState}
                removeTodo={(index) => removeTodo(index)}
                changeTodo={(value, index) => changeTodo(value, index)}
            />

            <CreateTodo inputRef={writeTodoValue} keyPressed={keyPressedHandler} />

        </div>
    );
}

export default App;
