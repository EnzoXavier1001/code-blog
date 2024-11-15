import styled from "styled-components";

export const CardStyles = styled.article`
    img {
        border-radius: 8px 8px 0 0;
    }
`

export const CardContent = styled.div`
    background-color: #fff;
    padding: 1.2rem;
    border-radius: 0 0 8px 8px;
    height: 25.0rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 28.8px;
    }

    p {
        color: #6B6B6B;
        font-weight: 500;
    }

`

export const CategorySpan = styled.span<{$backgroundColor: string;}>`
    display: inline-block;
    padding: 0.3rem 1.2rem;
    font-size: 1.5rem;
    border-radius: 6px;
    background-color: ${props => props.$backgroundColor};
`