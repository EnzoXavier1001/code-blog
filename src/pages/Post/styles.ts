import styled from "styled-components";

export const PostContainer = styled.article`
    padding: 3.2rem 0;
    max-width: 90rem;
    margin: 0 auto;

    header {
        margin-bottom: 3.2rem;
    }
    
    h1 {
        font-size: 3.2rem;
        font-weight: bold;
    }

    @media (max-width: 900px) {
        width: 90%;
    }

`

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.4rem;
`

export const PostContent = styled.div`
    p {
        margin-top: 4.2rem;
        font-size: 1.8rem;
        line-height: 28.8px;
    }
`

export const TagStyles = styled.span<{$backgroundColor: string}>`
        display: inline-block;
        color: #6B6B6B;
        font-weight: 500;
        padding: 0.3rem 0.8rem;
        border-radius: 4px;

        &:hover {
            background: ${props => props.$backgroundColor};
            color: #333333;
        }
`