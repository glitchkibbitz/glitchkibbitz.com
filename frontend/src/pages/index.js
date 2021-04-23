import * as React from 'react'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'

export default function IndexPage() {
  return (
    <>
      <h1>Klezmer + VGM tunes = win</h1>
      <p>
        Glitch Kibbitz is a Seattle band creating klezmer-inspired renditions of classic video game tunes. Whether your childhood nostalgia is Megaman or mazel tovs, our music is sure to strike a chord.
      <br />< br/>
        Like what you hear? Sign up for our email list and always be the first to know when new releases, launch parties, and live shows are coming up.
      </p>
      <a href="http://eepurl.com/gCr7S5" target="_blank" class="button"><FaEnvelope className="icon" /> Kibbitz with us!</a>
    </>
  );
}
