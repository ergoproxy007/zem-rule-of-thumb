import styled from 'styled-components';

export const Paragraph = styled.p``

export const CustomParagraph = styled.p`
    font-size: ${(props) => props.$fontSize};
    font-family: ${(props) => props.$family};
    font-weight: ${(props) => props.$weight};
    white-space: ${(props) => props.$spaces};
    line-height: ${(props) => props.$lineHeight};
`

export const H1 = styled.h1``

export const H2 = styled.h2``

export const H3 = styled.h3`
    color: white;
    font-size: 1.7rem;
    padding-top: 2px;
    white-space: normal;
`

export const Span = styled.span`
    font-size: ${(props) => props.$fontSize}
`

export const WhiteSpace = styled.span`
    white-space: pre-wrap;
    &:after {
        content: '  ';
    }
`
