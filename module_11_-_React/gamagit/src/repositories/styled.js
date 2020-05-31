import styled from "styled-components";

export const container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    div {
        margin: 5px;
    }   

    ul {
        all: inherit
    }

    li {
        all: inherit;
        padding: 5px;
        border-radius: 10px;
        background-color: burlywood;
    }
`;
