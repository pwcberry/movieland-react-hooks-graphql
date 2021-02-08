import styled from "styled-components";

const ContentLayout = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.page.width};
    padding: 0 ${({ theme }) => theme.page.columnGutter};
    margin: 0 auto;
    position: relative;
`;

export { ContentLayout };
