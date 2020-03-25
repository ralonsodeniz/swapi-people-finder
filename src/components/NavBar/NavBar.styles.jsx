import styled, { css } from 'styled-components';

import Rebel from '../../../assets/rebel-alliance.svg';
import Empire from '../../../assets/galactic-empire.svg';

import mediaQueryHelper from '../../style/media-queries';

const svgStyles = css`
  width: 3.5rem;
  padding: 5px;
  color: ${({ theme }) => theme.titleColor};

  ${mediaQueryHelper(
    'phone',
    css`
      width: 2.5rem;
      padding: 5px;
    `
  )};
`;

export const NavBarContainer = styled.nav`
  display: grid;
  grid-template: 5rem / repeat(3, auto);
  column-gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.75rem;
  background: ${({ theme }) => theme.gradientColorToTop};

  ${mediaQueryHelper(
    'phone',
    css`
      grid-template-rows: 4.5rem;
      margin-bottom: 1.5rem;
    `
  )};
`;

export const RebelLogoSvg = styled(Rebel)`
  ${svgStyles}
`;

export const EmpireLogoSvg = styled(Empire)`
  ${svgStyles}
`;

export const NavBarTitle = styled.h4`
  font-weight: bold;
  font-size: ${({ theme }) => theme.bigFontSize};
  color: ${({ theme }) => theme.titleColor};
`;
