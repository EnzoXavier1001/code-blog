import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: Lato, Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        background-color: #F5F5F5;
    }
`

export const Container = styled.div`
    max-width: 112rem;
    margin: 0 auto;    
`