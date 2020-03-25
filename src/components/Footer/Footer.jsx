import React from 'react';

import { FooterContainer, FooterText, FooterLink } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        {' '}
        © {new Date().getFullYear()} - Developed by{' '}
        <FooterLink
          href="https://github.com/ralonsodeniz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raúl Alonso Déniz
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
