import { css } from 'styled-components';

/*
1em = 16px
*/

export default (breakpoint, breakpointStyle) => {
  switch (breakpoint) {
    case 'phone-xs':
      return css`
        @media screen and (max-width: 23.45em) {
          /*0 - 375px*/
          ${breakpointStyle}
        }
      `;
    case 'phone':
      return css`
        @media screen and (max-width: 37.5em) {
          /*0 - 600px*/
          ${breakpointStyle}
        }
      `;
    case 'tab-port':
      return css`
        @media screen and (max-width: 56.25em) {
          /*900px*/
          ${breakpointStyle}
        }
      `;
    case 'tab-xl':
      return css`
        @media screen and (max-width: 68.75em) {
          /*1100px*/
          ${breakpointStyle}
        }
      `;
    case 'tab-land':
      return css`
        @media screen and (max-width: 75em) {
          /*1200px*/
          ${breakpointStyle}
        }
      `;
    case 'small-desktop':
      return css`
        @media screen and (min-width: 81.25em) {
          /*1300px*/
          ${breakpointStyle}
        }
      `;
    case 'big-desktop':
      return css`
        @media screen and (min-width: 112.5em) {
          /*1800px*/
          ${breakpointStyle}
        }
      `;

    default:
      return '';
  }
};
