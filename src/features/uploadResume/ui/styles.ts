import styled from 'styled-components';

export const DraggingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6f97dd80;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
