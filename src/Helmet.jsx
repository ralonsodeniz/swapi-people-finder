import React from 'react';
import { Helmet } from 'react-helmet';

const AppHelmet = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="SWAPI People Finder" />
    <title>SWAPI People Finder</title>
  </Helmet>
);

export default AppHelmet;
