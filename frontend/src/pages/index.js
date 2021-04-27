import * as React from 'react'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import Seo from '../components/Seo'

const Heading = styled.h3`
  font-style: italic;
  padding-top: 1em;
`

export default function IndexPage() {
  return (
    <>
      <Seo title={"Home"} />
      <h1>Klezmer + VGM tunes = win</h1>
      <Heading>Glitch Kibbitz is the first of its kind—a VGM cover band specializing in klezmerized interpretations of classic video game tunes.</Heading>
      <p>
        Formed in 2019 to perform at PAX West, Glitch Kibbitz has gone on to produce tracks for Materia Collective, perform at MAGFest, and release their own video games. Whether your childhood nostalgia is Megaman or mazel tovs, their music is sure to strike a chord!
      <br />< br/>
        Like what you <a href="/music">hear</a>? Sign up for the email list and always be the first to know when new releases, launch parties, and live shows are coming up.
      </p>
      <a href="http://eepurl.com/gCr7S5" target="_blank" rel="noopener noreferrer" className="button"><FaEnvelope className="icon" /> Kibbitz with us!</a>
    </>
  );
}
