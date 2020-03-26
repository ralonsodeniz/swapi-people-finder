import { css } from 'styled-components';

import mediaQueryHelper from './media-queries';

const primaryColor = '#333333';
const secondaryColor = '#696969';
const saveColor = '#228B22';
const removeColor = '#FF4500';
const defaultColor = '#4169E1';
const cardColor = '#FFFAFA';
const altCardColor = '#DCDCDC';
const fontColor = '#FFFFFF';
const titleColor = '#FFD700';
const primaryColorOpacity = `${primaryColor}B3`;

const gradientColorToTop = `linear-gradient(to top, ${primaryColor} 0%, ${secondaryColor} 100%)`;
const gradientColorToBot = `linear-gradient(to bottom, ${primaryColor} 0%, ${secondaryColor} 100%)`;

const defaultFontSize = '1rem';
const midFontSize = '1.25rem';
const bigFontSize = '1.5rem';
const smallFontSize = '0.75rem';
const xlFontSize = '2.25rem';

const titleStyles = css`
  margin: 0 0 2rem 0;
  font-size: ${xlFontSize};
  font-weight: bold;
  text-transform: uppercase;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      font-size: ${midFontSize};
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      font-size: ${midFontSize};
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      font-size: ${defaultFontSize};
    `
  )};
`;

const darkButtonStyles = css`
  color: ${titleColor};
  background-color: ${primaryColor};

  &:active {
    border: 1px solid ${titleColor};
  }
`;

const saveButtonStyles = css`
  color: ${fontColor};
  background-color: ${saveColor};

  &:active {
    border: 1px solid ${secondaryColor};
  }
`;

const removeButtonStyles = css`
  color: ${fontColor};
  background-color: ${removeColor};

  &:active {
    border: 1px solid ${secondaryColor};
  }
`;

export default {
  primaryColor,
  secondaryColor,
  saveColor,
  removeColor,
  defaultColor,
  cardColor,
  altCardColor,
  fontColor,
  titleColor,
  primaryColorOpacity,
  defaultFontSize,
  midFontSize,
  bigFontSize,
  smallFontSize,
  xlFontSize,
  titleStyles,
  gradientColorToTop,
  gradientColorToBot,
  darkButtonStyles,
  saveButtonStyles,
  removeButtonStyles,
};
