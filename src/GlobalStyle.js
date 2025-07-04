import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
    body {
        min-height: 100vh;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        color: black;
        background-repeat: no-repeat;
        background: linear-gradient(0deg, rgb(81, 81, 81) 0%, rgb(133, 133, 133) 61%, rgb(63, 64, 69) 100%);
    }
`;
export default GlobalStyle;
