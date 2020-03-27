import { css } from 'styled-components';

import mediaQueryHelper from './media-queries';

const primaryColor = '#333333';
const secondaryColor = '#696969';
const saveColor = '#228B22';
const removeColor = '#FF4500';
const defaultColor = '#4169E1';
const cardColor = '#FFFAFA';
const altCardColor = '#f2f2f2';
const whiteColor = '#FFFFFF';
const titleColor = '#FFD700';
const primaryColorOpacity = `${primaryColor}B3`;
const tableHoverColor = '#DCDCDC';

const gradientColorToTop = `linear-gradient(to top, ${primaryColor} 0%, ${secondaryColor} 100%)`;
const gradientColorToBot = `linear-gradient(to bottom, ${primaryColor} 0%, ${secondaryColor} 100%)`;

const defaultFontSize = '1rem';
const midFontSize = '1.25rem';
const bigFontSize = '1.5rem';
const smallFontSize = '0.75rem';
const xlFontSize = '2rem';

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
`;

const selectedButtonStyles = css`
  color: ${primaryColor};
  background-color: ${titleColor};
  cursor: default;
`;

const saveButtonStyles = css`
  color: ${whiteColor};
  background-color: ${saveColor};
`;

const removeButtonStyles = css`
  color: ${whiteColor};
  background-color: ${removeColor};
`;

const disabledButtonStyles = css`
  color: ${primaryColor};
  background-color: ${secondaryColor};
  box-shadow: inset 0px 0px 0px 1px ${primaryColor};
  cursor: default;
`;

const smallButtonStyles = css`
  padding: 0.5rem;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      padding: 3px;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      padding: 3px;
    `
  )};
`;

const mediumButtonStyles = css`
  padding: 1rem;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      padding: 0.5rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-xl',
    css`
      padding: 0.5rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      padding: 0.5rem;
    `
  )};
`;

const bigButtonStyles = css`
  padding: 1rem;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      padding: 0.75rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      padding: 0.75rem;
    `
  )};
`;

export default {
  primaryColor,
  secondaryColor,
  saveColor,
  removeColor,
  defaultColor,
  cardColor,
  altCardColor,
  whiteColor,
  titleColor,
  primaryColorOpacity,
  tableHoverColor,
  defaultFontSize,
  midFontSize,
  bigFontSize,
  smallFontSize,
  xlFontSize,
  titleStyles,
  gradientColorToTop,
  gradientColorToBot,
  darkButtonStyles,
  selectedButtonStyles,
  saveButtonStyles,
  removeButtonStyles,
  disabledButtonStyles,
  smallButtonStyles,
  mediumButtonStyles,
  bigButtonStyles,
};
