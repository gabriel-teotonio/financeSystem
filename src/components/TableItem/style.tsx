import styled from "styled-components";

export const TableLine = styled.tr``
export const TableColumn = styled.td`
    padding: 1rem 0;
`
export const Category = styled.div<{color:string}>`
    background-color: ${props => props.color};
    padding: .4rem ;
    color: white;
    border-radius: 4px;
    text-align: center;
    display: inline-block;
`

export const Value = styled.div<{color:string}>`
    color: ${props => props.color};
`