import styled from "styled-components";

export const Container = styled.div``
export const Header = styled.header`
    background-color: #010141; 
    color: white;
    height: 150px;
    box-shadow: #002fcb74 0 0 6px;
`
export const HeaderTitle = styled.h1`
    text-align: center;
    padding-top: 30px;
`

export const Body = styled.section`
    margin: auto;
    max-width: 980px;
    margin-bottom: 3rem;

    @media (max-width: 720px) {
        padding: 0 10px;
    }
` 