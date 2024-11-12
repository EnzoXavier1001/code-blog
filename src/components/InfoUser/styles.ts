import styled from "styled-components";

export const CardHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    img {
        width: auto;
        height: 4.0rem;
        clip-path: circle();
    }

    .header-content {
        color: #6B6B6B;

        h3 {
            font-weight: bold;
        }
    }

`