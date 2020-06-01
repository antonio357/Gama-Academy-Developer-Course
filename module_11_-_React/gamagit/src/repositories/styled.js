import styled from "styled-components";
import { Link } from "react-router-dom";

export const container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
        all: inherit;
        padding: 8px;
        border-radius: 6px;
        background-color: burlywood;
    }
`;

export const link = styled(Link)`
    border-radius: 10px;
    outline: none;
    border: 2px solid violet;
    background-color: white;
    padding: 0px 3px 2px 3px;
    margin: 0;
    text-decoration: none;

    :focus,
    :hover {
        border: 2px solid blueviolet;
        background-color: aliceblue;
    }
`;
