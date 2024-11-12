import styled from "styled-components";

export const HomeSection = styled.section``

export const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.0rem;
    margin: 0 auto;

    @media (max-width: 1130px) {
        grid-template-columns: repeat(2, 1fr);
        width: 90%;
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
