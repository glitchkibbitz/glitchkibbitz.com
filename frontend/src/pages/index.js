import * as React from 'react'
import styled from 'styled-components'

const IndexStyles = styled.div`

`;

export default function IndexPage() {
  return (
    <IndexStyles>
      <h1>Glitch Kibbitz</h1>
      <h2>Klezmer + VGM tunes = win</h2>
      <p>
          Glitch Kibbitz is a Seattle band creating klezmer-inspired renditions of classic video game tunes.    
      </p>
      <a href="http://eepurl.com/gCr7S5" target="_blank">
          Sign up for our email list</a> or <a href="#listen" target="_blank">listen to our releases</a>!
    </IndexStyles>
  );
}
