import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    box-shadow: ${props => props.theme.boxShadow.primaryShadow};
    border-radius: 6px;
    padding: 1.2rem;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`   
export const InputTitle = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
`
export const Input = styled.input`
    border: 0;
    border: #0b56ac5c 1px solid;
    padding: 0 6px;
    outline: none;
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    &:focus{
        box-shadow: #0b56ac5c 0 0 3px;
    }
    `
export const Select = styled.select`
    border: 0;
    border: #0b56ac5c 1px solid;
    outline: none;
    border-radius: 4px;
    padding: 0 6px;
    height: 2rem;
    width: 100%;
    font-size: 1rem;
    &:focus{
        box-shadow: #0b56ac5c 0 0 3px;
    }
    
    `
export const Button = styled.button`
    padding: 0 5px;  
    border: 0;
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    cursor: pointer;
    background-color: #329fff;
    color: white;
        &:hover{
            background-color: #168af0;
        }
        &:focus{
            box-shadow: #168af068 0 0 6px;
        }
    `
