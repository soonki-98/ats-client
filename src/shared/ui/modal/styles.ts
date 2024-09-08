import styled from 'styled-components';

export const ModalDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
`;
