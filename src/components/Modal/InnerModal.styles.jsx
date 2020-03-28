import styled from 'styled-components';

export default styled.div`
  background-color: ${({ theme }) => theme.primaryColorOpacity};
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
