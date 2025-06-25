import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }

    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
    body {
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        color: white;
        background: #050069;
        background: linear-gradient(0deg, rgb(4, 0, 74) 0%, rgba(1, 1, 140, 1) 61%, rgb(0, 121, 145) 100%);
    }
`;
export default GlobalStyle;
