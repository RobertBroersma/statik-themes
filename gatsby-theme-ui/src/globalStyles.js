import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #___gatsby,
  div[role="group"][tabindex] {
    width: 100%;
    height: 100%;
  }

  div[role="group"][tabindex] {
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  line-height: ${({ theme }) => theme.lineHeights[2]};
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    color: #535358;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  figure {
    margin: 0;
  }

`
