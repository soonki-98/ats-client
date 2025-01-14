import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #ddd;
  overflow: hidden;
`;

export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 180px);
  gap: 20px;
  list-style: none;
  padding: 0;
  overflow-y: auto;
`;
