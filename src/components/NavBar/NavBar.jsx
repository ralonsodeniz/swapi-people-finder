import React from 'react';

import { NavBarContainer, NavBarTitle, EmpireLogoSvg, RebelLogoSvg } from './NavBar.styles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <EmpireLogoSvg />
      <NavBarTitle> SWAPI People Finder </NavBarTitle>
      <RebelLogoSvg />
    </NavBarContainer>
  );
};

export default NavBar;
