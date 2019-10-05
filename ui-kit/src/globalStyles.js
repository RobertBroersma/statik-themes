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
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    font-family: ${({ theme }) => theme.fonts.normal};
    color: ${({ theme }) => theme.colors.bodytext};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.normal};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  figure {
    margin: 0;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }

  .react-css-collapse-transition {
    transition: height 250ms cubic-bezier(.4, 0, .2, 1);
  }
`
