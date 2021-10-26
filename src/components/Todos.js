import { useState } from "react";
import Todo from "./Todo";
import styled from "styled-components";

const Todos = (props) => {
    const [name, setName] = useState(localStorage.getItem("name") ? localStorage.getItem("name") : "");
    const [isChangingName, setIsChangingName] = useState(false);

    const updateName = (e) => {
        setName(e.target.value);
        localStorage.setItem("name", e.target.value)
    }

    return (
        <Container>
            {
                isChangingName &&
                <Input
                    defaultValue={name}
                    onChange={updateName}
                    onKeyPress={({ key }) => key === "Enter" && setIsChangingName(false)}
                    placeholder="Write your name!"
                />
            }
            <H1 onClick={() => setIsChangingName(!isChangingName)}>
                TODOS {name.length > 0 && "of " + name}
            </H1>

            <TodosWrapper>
                {
                    props.todosFromApp.length === 0 ? <EmpetyMessage>There is nothing yet!</EmpetyMessage> :
                        props.todosFromApp.map((e, i) =>
                            <Todo
                                key={i}
                                name={e}
                                removeTodo={() => props.removeTodo(i)}
                                changeTodo={(val) => props.changeTodo(val, i)}
                            />
                        )
                }
            </TodosWrapper>
        </Container>
    )
}

export default Todos;

const Container = styled.div`
    max-width: 400px;
    background-color: #3f5599;
    margin: auto;
    padding: 50px;
`;

const H1 = styled.h1`
    color: white;
    text-align: center;
`;

export const Input = styled.input`
    display: block;
    margin: auto;
    padding: 10px;
`;

const TodosWrapper = styled.div`
    height: 300px;
    overflow: auto;
`;

const EmpetyMessage = styled.p`
    padding: 10px 30px;
    background-color: white;
    text-align: center;
`