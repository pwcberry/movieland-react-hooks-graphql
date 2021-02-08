import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
        line-height: 1.3;
    }

    body {
        font-size: 1rem;
        background-color: ${({ theme }) => theme.colors.lightestBlue};
    }
`;

const MovielandStyle = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default MovielandStyle;
