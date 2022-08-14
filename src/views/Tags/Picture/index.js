import styled from 'styled-components';

export const Image = styled.img``

export const CustomImage = styled.img`
    padding-left: ${(props) => props.$left};
    padding-right: ${(props) => props.$right};
`
