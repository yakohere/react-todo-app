import styled from "styled-components"
import { Input } from "./Todos"

const CreateTodo = (props) => {
    return (
        <Container>
            <Input ref={props.inputRef} onKeyPress={props.keyPressed} placeholder="Write TODO!" />
        </Container>
    )
}

export default CreateTodo

const Container = styled.div`
    width: 400px;
    padding: 20px 50px;
    margin: auto;
    background-color: #1d2e5e;
`