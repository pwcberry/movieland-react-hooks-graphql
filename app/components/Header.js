import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { ContentLayout } from "../styles/layout";
import { Text } from "../styles/elements";

const PageHeaderSection = styled.section`
    background-color: ${({ theme }) => theme.colors.blue};
    border-top: 2px solid ${({ theme }) => theme.colors.lightBlue};
    width: 100%;
`;

const PageHeaderLayout = styled(ContentLayout)`
    padding-top: ${({ theme }) => theme.spacing.small};
    padding-bottom: ${({ theme }) => theme.spacing.small};
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 96px 1fr 1fr;
`;

const LogoLayout = styled.div`
    grid-row: 1/3;
    grid-column: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        width: 122px;
        height: 91px;
        transform: rotate(-8deg) scale(1.25) translate(5px, -10px);
    }
`;

const TitleLayout = styled.div`
    grid-row: 1/1;
    grid-column: 3/6;
`;

const TaglineLayout = styled.div`
    grid-row: 2/2;
    grid-column: 4/13;
`;

const H1 = styled.h1`
    font-family: ${({ theme }) => theme.fonts.heavyItalic.fontFamily};
    font-weight: ${({ theme }) => theme.fonts.heavyItalic.fontWeight};
    font-style: ${({ theme }) => theme.fonts.heavyItalic.fontStyle};
    margin: 0;
    color: ${({ theme }) => theme.colors.yellow};
    text-transform: uppercase;
    font-size: 4rem;
`;

const Tagline = styled(Text)`
    color: ${({ theme }) => theme.colors.yellow};
    font-style: italic;
    font-size: 1.875rem;
    margin: 0;
`;

const Header = ({ onSearch }) => (
    <PageHeaderSection>
        <PageHeaderLayout>
            <LogoLayout>
                <Logo />
            </LogoLayout>
            <TitleLayout>
                <H1>Movieland</H1>
            </TitleLayout>
            <TaglineLayout>
                <Tagline>Search for and explore movies.</Tagline>
            </TaglineLayout>
            <SearchInput onSearch={onSearch} />
        </PageHeaderLayout>
    </PageHeaderSection>
);

Header.propTypes = {
    onSearch: PropTypes.func,
};

export default Header;
