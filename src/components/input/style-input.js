// eslint-disable-next-line no-unused-vars
import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    input {
        margin: 10px 0;
        border: 1px solid #FAFAFA;
        border-radius: 20px;
        height: 42px;
        width: 80%;
        color: white;
        background: black;
        border: 0;
        padding: 0 16px;

        &::placeholder {
            color: #FAFAFA80;
        }
    }

    button {
        height: 30px;
        width: 120px;
        border-radius: 10px;
        background-color: black;
        color: white;
        border: 1px solid #FAFAFA;
        cursor: pointer;
        margin-top: 10px;
        
        &:hover {
            background-color: #333;
        }
    }

    .error {
        color: #ff4444;
        margin-top: 10px;
        font-family: "Poppins", sans-serif;
        font-size: 14px;
    }
`