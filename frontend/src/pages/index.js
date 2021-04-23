import * as React from 'react'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import SEO from '../components/SEO'

const Heading = styled.h3`
  font-style: italic;
  padding-top: 1em;
`

export default function IndexPage() {
  return (
    <>
      <SEO title={"Home"} />
      <h1>Klezmer + VGM tunes = win</h1>
      <Heading>Glitch Kibbitz is a Seattle band creating klezmer-inspired renditions of classic video game tunes.</Heading>
      <p>
        GK has performed at PAX, MAGFest, and basements near you. Since forming in 2018, they've released two albums and one video game. Whether your childhood nostalgia is Megaman or mazel tovs, their music is sure to strike a chord! 
      <br />< br/>
        Like what you <a href="/music">hear</a>? Sign up for the email list and always be the first to know when new releases, launch parties, and live shows are coming up.
      </p>
      <a href="http://eepurl.com/gCr7S5" target="_blank" class="button"><FaEnvelope className="icon" /> Kibbitz with us!</a>
    </>
  );
}
