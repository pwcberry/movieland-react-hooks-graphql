import React from "react";
import styled from "styled-components";

const Text = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.regular.fontWeight};
    font-style: ${({ theme }) => theme.fonts.regular.fontStyle};
    font-size: 1rem;
    line-height: 1.3;
`;

const Strong = styled.strong`
    font-family: ${({ theme }) => theme.fonts.bold.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.bold.fontWeight};
    font-style: ${({ theme }) => theme.fonts.bold.fontStyle};
`;

const Italic = styled.em`
    font-family: inherit;
    font-weight: inherit;
    font-style: italic;
`;

const Sub = styled.sub`
    font-size: 0.75em;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    bottom: -0.25em;
`;

const Sup = styled.sup`
    font-size: 0.75em;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    top: -0.5em;
`;

const TextInput = styled.input`
    font-family: ${({ theme }) => theme.fonts.regular.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.regular.fontWeight};
    font-style: ${({ theme }) => theme.fonts.regular.fontStyle};
    font-size: 1rem;
    line-height: 1;
`;

const Button = styled.button`
    font-family: ${({ theme }) => theme.fonts.regular.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.regular.fontWeight};
    font-style: ${({ theme }) => theme.fonts.regular.fontStyle};
    font-size: 1rem;
    line-height: 1;
    text-transform: none;
`;

const H1 = styled.h1`
    font-family: ${({ theme }) => theme.fonts.heavy.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.heavy.fontWeight};
    font-style: ${({ theme }) => theme.fonts.heavy.fontStyle};
    font-size: 1.875rem;
    margin: 0.5em 0 0.75em;
    color: ${({ theme }) => theme.palette.text.color};
`;

const H2 = styled.h2`
    font-family: ${({ theme }) => theme.fonts.bold.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.bold.fontWeight};
    font-style: ${({ theme }) => theme.fonts.bold.fontStyle};
    font-size: calc(1.375rem + 1.6vw);
    margin: 0.5em 0 0.67em;
    color: ${({ theme }) => theme.palette.text.color};
`;

const H3 = styled.h3`
    font-family: ${({ theme }) => theme.fonts.bold.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.bold.fontWeight};
    font-style: ${({ theme }) => theme.fonts.bold.fontStyle};
    font-size: calc(1.125 + 1.3vw);
    line-height: 1;
    margin: 0.33em 0;
    color: ${({ theme }) => theme.palette.text.color};
`;

export { Text, Strong, Italic, Sub, Sup, TextInput, Button, H1, H2, H3 };
