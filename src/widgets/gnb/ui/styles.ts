import styled from 'styled-components';

export const StyledGnbWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.dark_100};

  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
    height: 60px;
  }
`;
