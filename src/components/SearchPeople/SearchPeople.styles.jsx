import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

export const SearchPeopleContainer = styled.div`
  display: grid;
  grid-template: auto / auto auto;
  grid-template-areas:
    'title searchbox'
    'table table';
  position: relative;
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 5px;

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template: auto / auto;
      grid-template-areas:
        'title'
        'searchbox'
        'table';
    `
  )}
`;

export const TableScroll = styled.div`
  grid-area: table;
  padding: 0 0 1rem 1rem;
  width: 65rem;
  height: 20rem;
  overflow-x: auto;
  overflow-y: auto;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      height: 12.5rem;
      width: 45.15rem;
      font-size: ${({ theme }) => theme.smallFontSize};
    `
  )};

  ${mediaQueryHelper(
    'tab-xl',
    css`
      width: 57rem;
      height: 18rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      height: 12.5rem;
      width: 40.75rem;
      font-size: ${({ theme }) => theme.smallFontSize};
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      height: 10.5rem;
      width: 18.3rem;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      width: 17.85rem;
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

export const SearchPeopleTable = styled.table`
  border-collapse: collapse;
  width: 64rem;
  background-color: ${({ theme }) => theme.cardColor};

  ${mediaQueryHelper(
    'small-desktop',
    css`
      width: 44.15rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-xl',
    css`
      width: 56rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      width: 39.75rem;
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      width: 17.25rem;
    `
  )};

  ${mediaQueryHelper(
    'phone-xs',
    css`
      width: 16.85rem;
    `
  )};
`;

export const TableHeader = styled.thead`
  & th {
    position: sticky;
    top: 0;
    padding: 1rem 0 1rem 1rem;
    text-align: left;
    background-color: ${({ theme }) => theme.cardColor};
    color: ${({ theme }) => theme.primaryColor};
    width: max-content;
  }
`;

export const TableBody = styled.tbody`
  & th,
  td {
    width: max-content;
    border: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }

  & tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.altCardColor};
  }

  & tr:hover {
    background-color: ${({ theme }) => theme.tableHoverColor};
  }
`;

export const SearchPeopleSpinnerContainer = styled.div`
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

export const SearchPeopleTitle = styled.h2`
  grid-area: title;
  ${({ theme }) => theme.titleStyles};
  padding-left: 1rem;
  margin: 1rem auto 0.75rem 0;
  color: ${({ theme }) => theme.titleColor};
`;

export const SearchPeopleSearchBox = styled.div`
  grid-area: searchbox;
  padding-right: 0.5rem;
  margin: 1rem 0 0.75rem auto;

  ${mediaQueryHelper(
    'phone',
    css`
      margin: 0 auto 0.75rem 0;
      padding: 0 0 0 0.5rem;
    `
  )};
`;

export const SearchPeopleButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
