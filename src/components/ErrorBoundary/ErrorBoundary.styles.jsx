import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

import DeathStar from '../../../assets/death-star.svg';

export const ErrorContainer = styled.header`
  margin: auto;
  width: 600px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: auto / auto;
  grid-row-gap: 30px;
  grid-template-areas:
    'title '
    'svg '
    'description ';

  ${mediaQueryHelper(
    'phone',
    css`
      width: 300px;
    `
  )};
`;

export const ErrorTitle = styled.h2`
  grid-area: title;
  ${({ theme }) => theme.titleStyles}
  margin-top: 10px;
  color: ${({ theme }) => theme.titleColor};
`;

export const ErrorSvg = styled(DeathStar)`
  grid-area: svg;
  width: 150px;
  padding: 5px;

  ${mediaQueryHelper(
    'phone',
    css`
      width: 140px;
      padding: 5px;
    `
  )};
`;

export const ErrorDescription = styled.p`
  grid-area: description;
  line-height: 1.5rem;
  max-width: 25rem;
`;
