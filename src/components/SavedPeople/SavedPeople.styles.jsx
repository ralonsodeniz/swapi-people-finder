import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

export const SavedPeopleContainer = styled.div`
  grid-area: saved;
  display: grid;
  grid-template: auto / auto auto;
  grid-template-areas:
    'title filters'
    'cardList cardList';
  position: relative;
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 5px;

  ${mediaQueryHelper(
    'tab-xl',
    css`
      grid-template: auto / auto;
      grid-template-areas:
        'title'
        'filters'
        'cardList';
    `
  )}
`;

export const SavedPeopleScroll = styled.div`
  grid-area: cardList;
  display: grid;
  grid-template-columns: repeat(auto-fill, 12rem);
  grid-column-gap: 1rem;
  grid-row-gap: 1.25rem;
  justify-content: flex-start;
  padding: 0 0 1rem 1rem;
  width: 65.1rem;
  height: 16.1rem;
  overflow-x: hidden;
  overflow-y: auto;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      grid-template-columns: repeat(auto-fill, 8rem);
      height: 10.1rem;
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

export const SavedPeopleTitle = styled.h2`
  grid-area: title;
  ${({ theme }) => theme.titleStyles};
  padding-left: 1rem;
  margin: 1rem auto 0.75rem 0;
  color: ${({ theme }) => theme.titleColor};
`;

export const SavedPeopleFiltersContainer = styled.div`
  grid-area: filters;
  padding-right: 1rem;
  display: flex;
  margin: 1rem 0 0.75rem auto;

  ${mediaQueryHelper(
    'tab-xl',
    css`
      margin: 0 auto 0.75rem 0;
      padding: 0 0 0 1rem;
    `
  )};
`;

export const SavedPeopleEmptyText = styled.p`
  font-size: ${({ theme }) => theme.defaultFontSize};
  color: ${({ theme }) => theme.primaryColor};
`;
