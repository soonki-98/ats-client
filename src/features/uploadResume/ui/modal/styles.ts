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

export const BottomButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const FileList = styled.ul`
  margin: 1rem 0;
  max-height: 400px;
  overflow-y: auto;
`;
