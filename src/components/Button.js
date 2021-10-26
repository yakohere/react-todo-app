import styled from "styled-components";

const Button = (props) => {
    return <ButtonComponent editButton={props.editButton} onClick={props.buttonClicked}>{props.name}</ButtonComponent>
}

export default Button;

const ButtonComponent = styled.button`
    padding: 5px;
    width: 80px;
    margin: 0 5px;
    background-color: ${(props) => props.editButton ? "#3f7299" : "#993f3f"};
    color: white;
    border: none;
    border-radius: 5px;
`;