import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: white;
    padding: 1.2rem;
    box-shadow: ${props => props.theme.boxShadow.primaryShadow};
    border-radius: 6px;
    margin-top: -2.4rem;
    display: flex;
    align-items: center;

    @media (max-width: 520px) { 
        flex-direction: column-reverse;
        gap: 1.5rem;
        font-size: .8rem;
        padding: 1.2rem .5rem;
    }
`

export const MonthArea = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`
export const MonthIcon = styled.div`
    font-size: 1.5rem;
    width: 2.5rem;
    text-align: center;
    cursor: pointer;
`
export const MonthTitle = styled.div`
    text-align: center;
    flex: 1;
`
export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
    gap: 2rem;
`