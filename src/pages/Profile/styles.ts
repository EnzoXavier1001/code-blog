import styled from "styled-components";

export const ProfileBg = styled.div<{$backgroundColor: string;}>`
    background-color: ${props => props.$backgroundColor};
    height: 13.0rem;
`

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 2.4rem;

    img {
        height: 100px;
        margin-top: -75px;
        clip-path: circle();
    }
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;
    
    h2 {
        font-size: 2.4rem;
        font-weight: bold;
        font-size: 1.8rem;
    }

    p {
        text-align: center;
    }
`