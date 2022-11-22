import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: white;
    padding: 1.2rem;
    box-shadow: ${props => props.theme.boxShadow.primaryShadow};
    border-radius: 6px;
    margin-top: 1.5rem;
    
    @media (max-width: 520px) {
        font-size: .6rem;
    }
`
export const TableHeadColumn = styled.th`
    text-align: left;
    padding: 10px 0;
`