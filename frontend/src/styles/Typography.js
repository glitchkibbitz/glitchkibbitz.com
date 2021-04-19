import { createGlobalStyle } from 'styled-components'
import '@fontsource/ubuntu'
import '@fontsource/east-sea-dokdo'

const Typography = createGlobalStyle`
  html {
    font-family: 'Ubuntu', 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--off-white);
  }
  nav {
      font-family: 'East Sea Dokdo', sans-serif;
  }
  body {
    font-size: 1.5rem;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--off-white);
    text-decoration-color: var(--light-blue);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
