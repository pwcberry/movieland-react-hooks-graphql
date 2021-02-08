import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button, TextInput } from "../styles/elements";

const Container = styled.div`
    padding-top: 0.5rem;
    grid-row: 3/3;
    grid-column: 2/12;
`;

const SearchField = styled(TextInput)`
    display: block;
    flex: 1;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lightestBlue};
    font-size: 1.5rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;

    &:focus {
        border: 2px solid ${({ theme }) => theme.colors.yellow};
        outline: 0;
    }
`;

const SearchButton = styled(Button)`
    width: 40px;
    height: 40px;
    border: none;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;

    &:focus {
        border: 2px solid ${({ theme }) => theme.colors.yellow};
        outline: 0;
    }
`;

const SearchInput = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleKeyUp = ({ key }) => {
        if (key === "Enter") {
            onSearch({ query: inputValue });
        }
    };

    return (
        <Container>
            <div className="search-input__query">
                <SearchField
                    type="text"
                    value={inputValue}
                    onChange={({ target: { value } }) => setInputValue(value)}
                    onKeyUp={handleKeyUp}
                    data-testid="search-input-field"
                />
                <SearchButton data-testid="search-input-button" type="button" onClick={() => onSearch({ query: inputValue })} />
            </div>
            <div className="search-input__filter"></div>
        </Container>
    );
};

SearchInput.propTypes = {
    onSearch: PropTypes.func,
};

export default SearchInput;
