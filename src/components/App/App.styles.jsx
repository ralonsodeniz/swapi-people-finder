import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

export default styled.div`
  margin: 0 auto 0 auto;
  max-width: 1200px;
  flex-grow: 1;
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: start;
  align-items: start;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'search information'
    'saved information';
  grid-gap: 3rem;
  margin-bottom: 10px;

  ${mediaQueryHelper(
    'tab-xl',
    css`
      grid-template-columns: repeat(2, auto);
      grid-template-areas:
        'search search'
        'saved information';
    `
  )}

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template-columns: auto;
      grid-template-areas:
        'search'
        'saved'
        'information';
      grid-gap: 1.5rem;
    `
  )}
`;
