import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html, body, #root {
  height: 100%;
  width: 100%;
}

html {
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.primaryColor};
}
    
body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ theme }) => theme.secondaryColor};
  margin: 0;
  padding: 0;

  &:fullscreen {
      background-color: ${({ theme }) => theme.primaryColor};
    }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  monospace;
}

p,
a,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.defaultFontSize};
  text-align: justify;
}

a,
a:link,
a:hover,
a:visited,
a:active {
  text-decoration: none;
}

#root{
  display:flex;
  flex-direction:column;
}
`;
