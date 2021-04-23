import * as React from 'react'
import styled from 'styled-components'
import { FaBandcamp, FaSpotify } from 'react-icons/fa';

const BandcampButton = styled.button`
  background-color: rgb(20,157,203);
  margin-top: 1em;
`;

const SpotifyButton = styled.button`
  background-color: rgb(28,185,84);
`;

export default function MusicPage() {
  return (
    <>
    <h1>Listen</h1>
    <h2>Let your ears nosh on some auditory treats.</h2>
    <BandcampButton><FaBandcamp /> Bandcamp</BandcampButton>
    <SpotifyButton><FaSpotify /> Spotify</SpotifyButton>
    <div class="bandcamp-album">
        <iframe style={{ border: '0', height: '150px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1366043256/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://glitchkibbitz.bandcamp.com/album/misirlou-sisters">Misirlou Sisters by Glitch Kibbitz</a></iframe>
    </div>

    <div class="bandcamp-album">
      <iframe style={{border: '0', height: '307px'}} src="https://bandcamp.com/EmbeddedPlayer/album=153649330/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://glitchkibbitz.bandcamp.com/album/glitch-kibbitz">Glitch Kibbitz by Glitch Kibbitz</a></iframe>
    </div>

    <h2>Performances</h2>

    <div class="video">
      <iframe width="100%" height="432" src="https://www.youtube.com/embed/3SrmjG50jZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="video">
      <iframe width="100%" height="432" src="https://www.youtube.com/embed/l4vw0j5zLlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </>
  );
}
