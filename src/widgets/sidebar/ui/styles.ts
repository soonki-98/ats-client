import styled from 'styled-components';

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.info_100};
`;

export const StyledSidebarMenu = styled.li`
  padding: 20px 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.info_80};
  }
`;
