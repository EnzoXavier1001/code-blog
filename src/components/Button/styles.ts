import styled from "styled-components";

export const Button = styled.button<{$backgroundColor: string, $color: string}>`
    background-color: ${(props) => props.$backgroundColor};
    color: ${(props) => props.$color};
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.8rem 1.8rem;
    border-radius: 6px;
    font-size: 1.5rem;
    border: 1px solid;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: transparent;
        border: 1px solid ${props => props.$backgroundColor};
        color: ${props => props.$backgroundColor};
    }
`