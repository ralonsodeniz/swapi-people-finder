import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

const titlesStyles = css`
  ${({ theme }) => theme.titleStyles};
  margin: 1rem auto 0.75rem 0;
`;

const smallTableStyles = css`
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.smallFontSize};
`;

export const InformationContainer = styled.div`
  grid-area: information;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 1rem 1rem;
  position: relative;
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 5px;
`;

export const InformationTitle = styled.h2`
  ${titlesStyles};
  color: ${({ theme }) => theme.titleColor};
`;

export const InformationImage = styled.img`
  width: 15.2rem;
  height: 15.2rem;
  object-fit: cover;
  max-width: 100%;
  border-radius: 50%;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      width: 9.25rem;
      height: 9.25rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      width: 10rem;
      height: 10rem;
    `
  )};
`;

export const CharacterName = styled.h3`
  ${titlesStyles};
  font-size: ${({ theme }) => theme.bigFontSize};
  color: ${({ theme }) => theme.primaryColor};
`;

export const CharacterDetailsContainer = styled.div`
  width: 25rem;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  display: flex;
  flex-direction: column;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      width: 17.25rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      width: 17.13rem;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      width: 16.73rem;
    `
  )};
`;

export const CharacterInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  font-size: ${({ theme }) => theme.defaultFontSize};
  border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.titleColor};

  &:last-child {
    border-bottom: none;
  }

  ${mediaQueryHelper(
    'small-desktop',
    css`
      ${smallTableStyles}
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      ${smallTableStyles}
    `
  )};
`;

export const CharacterInfoTitle = styled.span`
  font-weight: bolder;
`;
