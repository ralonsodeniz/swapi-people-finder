import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
  width: 15rem;
  height: 20rem;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      width: 8rem;
      height: 10.5rem;
    `
  )}

  ${mediaQueryHelper(
    'tab-xl',
    css`
      width: 12rem;
      height: 16rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      width: 8rem;
      height: 10.5rem;
    `
  )}
`;

export const CardImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  height: 15rem;
  border-radius: 5px 5px 0 0;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      height: 8rem;
    `
  )}

  ${mediaQueryHelper(
    'tab-xl',
    css`
      height: 12rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      height: 8rem;
    `
  )};
`;

export const CardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.titleColor};
  border-radius: 0 0 5px 5px;
  height: 5rem;
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};

  ${mediaQueryHelper(
    'small-desktop',
    css`
      height: 2.5rem;
    `
  )}

  ${mediaQueryHelper(
    'tab-xl',
    css`
      height: 4rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      height: 2.5rem;
    `
  )};
`;

export const CardDetailsTitle = styled.h3`
  font-weight: bold;
  font-size: ${({ theme }) => theme.midFontSize};

  ${mediaQueryHelper(
    'small-desktop',
    css`
      font-size: ${({ theme }) => theme.smallFontSize};
    `
  )}

  ${mediaQueryHelper(
    'tab-xl',
    css`
      font-size: ${({ theme }) => theme.defaultFontSize};
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      font-size: ${({ theme }) => theme.smallFontSize};
    `
  )};
`;

export const CardDetailsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
