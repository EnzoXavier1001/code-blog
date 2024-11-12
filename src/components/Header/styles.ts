import styled from "styled-components";

export const HeaderStyles = styled.header`
    padding: 1.4rem 0;
    background-color: #fff;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.0rem;
    margin: 0 auto;
    
    div {
        display: flex;
        align-items: center;
        gap: 3.2rem;
    }

    .header-wrapper__left  {
        flex: 4;
    }

    .header-wrapper__right {
        flex: 1;
    }
`