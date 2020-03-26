import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

export const AppContainer = styled.div`
  margin: 0 auto 0 auto;
  max-width: 1200px;
  height: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template: auto / 2fr 1fr;
  grid-template-areas:
    'search information'
    'saved information';
  grid-gap: 2rem;
  margin-bottom: 10px;

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template: auto / auto;
      grid-template-areas:
        'search'
        'saved'
        'information';
    `
  )}
`;

export const SearchPeopleContainer = styled.div`
  grid-area: search;
`;

export const SavedPeopleContainer = styled.div`
  grid-area: saved;
`;

export const InformationContainer = styled.div`
  grid-area: information;
`;
