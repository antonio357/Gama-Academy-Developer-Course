import styled from "styled-components";

export const container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        margin: 5px;
    }   

    input {
        border-radius: 10px;
        text-align: center;
        border: 2px solid violet;
        outline: none;

        :focus, :hover {
            border: 2px solid blueviolet;
            background-color: aliceblue;
        }
    }

    button {
        border-radius: 10px;
        outline: none;
        border: 2px solid violet;
        background-color: white;

        :focus, :hover {
            border: 2px solid blueviolet;
            background-color: aliceblue;
        }

    }
`;
