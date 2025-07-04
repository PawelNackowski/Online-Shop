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
        color: ${({theme}) => theme.colors.dark};
        background-repeat: no-repeat;
        background: ${({theme}) => theme.colors.light};
    }
`;
export default GlobalStyle;
