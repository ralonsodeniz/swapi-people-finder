import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

export const SavedPeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 5px;
`;

export const SavedPeopleScroll = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  grid-gap: 1.25rem;
  justify-content: center;
  padding: 0 0 1rem 1rem;
  width: 65rem;
  height: 20rem;
  overflow-x: hidden;
  overflow-y: auto;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      grid-template-columns: repeat(auto-fill, 8rem);
      height: 10.5rem;
      width: 45.15rem;
      grid-gap: 1rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-xl',
    css`
      grid-template-columns: repeat(auto-fill, 12rem);
      width: 26.5rem;
      height: 33rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      padding: 0 0 0.5rem 1rem;
      grid-template-columns: repeat(auto-fill, 8rem);
      height: 22.5rem;
      width: 18.5rem;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template-columns: repeat(auto-fill, 8rem);
      height: 10.5rem;
      width: 18.25rem;
      grid-gap: 1rem;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      width: 17.85rem;
      grid-gap: 0.75rem;
    `
  )};

  ::-webkit-scrollbar {
    height: 1rem;
    display: inline-block;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 1rem;
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 1rem;
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

export const SavedPeopleSpinnerContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryColorOpacity};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const SavedPeopleTitle = styled.h2`
  ${({ theme }) => theme.titleStyles};
  padding-left: 1rem;
  margin: 1rem auto 0.75rem 0;
  color: ${({ theme }) => theme.titleColor};
`;

export const SavedPeopleFiltersContainer = styled.div`
  padding-left: 1rem;
  display: flex;
  margin: 0 auto 0.75rem 0;
`;
