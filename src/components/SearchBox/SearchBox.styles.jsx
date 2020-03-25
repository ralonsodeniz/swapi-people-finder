import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

const shrinkLabelStyles = css`
  top: -0.5rem;
  font-size: ${({ theme }) => theme.smallFontSize};
  background-image: none;
  -webkit-text-fill-color: ${({ theme }) => theme.titleColor};

  ${mediaQueryHelper(
    'phone',
    css`
      top: -0.4rem;
    `
  )};
`;

export const SearchBoxContainer = styled.div`
  padding: 0.5rem;
  position: relative;
  align-self: center;
`;

export const SearchBoxInput = styled.input`
  color: ${({ theme }) => theme.titleColor};
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.titleColor};
  display: block;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.defaultFontSize};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }

  ${mediaQueryHelper(
    'phone',
    css`
      padding: 0.35rem;
    `
  )};
`;

export const SearchBoxLabel = styled.label`
  font-size: ${({ theme }) => theme.defaultFontSize};
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 17.5px;
  transition: 300ms ease all;
  z-index: 9;

  ${mediaQueryHelper(
    'phone',
    css`
      top: 15px;
    `
  )};

  ${({ shrink }) => (shrink ? shrinkLabelStyles : '')};
`;
