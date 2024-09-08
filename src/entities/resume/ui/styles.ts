import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  width: 180px;
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  justify-content: space-between;
  margin-top: 20px;
`;
