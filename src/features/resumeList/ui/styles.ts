import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #ddd;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 20px;
  list-style: none;
  padding: 0;
`;
