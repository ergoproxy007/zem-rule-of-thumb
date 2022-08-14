import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    flex-direction: ${(props) => props.$isReverse ? 'row-reverse' : 'row'};
    align-items: center;
`
