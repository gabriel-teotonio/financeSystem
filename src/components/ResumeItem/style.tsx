import styled from "styled-components";


export const Container = styled.div`
    flex: 1;
    text-align: center;
`
export const Title = styled.h4`
    font-weight: 600;
    color: #696969;
`
export const Info = styled.p<{color?:string}>`
    font-weight: 600;
    color: ${props => props.color ?? '#000'};
`