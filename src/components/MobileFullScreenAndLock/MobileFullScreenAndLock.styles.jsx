import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

export default styled.div`
  margin: 0 auto 0 auto;
  width: max-content;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid ${({ theme }) => theme.titleColor};
  color: ${({ theme }) => theme.titleColor};
  border-radius: 5px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueryHelper(
    'tab-port',
    css`
      max-width: 37rem;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      border-width: 1px;
      max-width: 18.75rem;
      padding: 0.75rem;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      max-width: 17rem;
      padding: 0.55rem;
    `
  )};
`;
