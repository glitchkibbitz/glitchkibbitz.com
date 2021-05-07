import * as React from 'react'
import styled from 'styled-components'
import { FaBandcamp, FaSpotify } from 'react-icons/fa'
import Seo from '../components/Seo'

const BandcampButton = styled.a`
  background-color: rgb(20,157,203);
  margin-top: 1em;
`

const SpotifyButton = styled.a`
  background-color: rgb(28,185,84);
`

export default function MusicPage() {
  return (
    <>
      <Seo title={"Music"} />
      <h1>Music</h1>
      <h3>Let your ears nosh on some auditory treats.</h3>
      <BandcampButton href="https://glitchkibbitz.bandcamp.com/releases" target="_blank" className="button"><FaBandcamp className="icon" /> Bandcamp</BandcampButton>
      <SpotifyButton href="https://open.spotify.com/artist/3YGg09DqnM5l5pdF6q07Qf?si=SnPj4cd5SOCt9xWjWlfKWw" target="_blank" className="button"><FaSpotify className="icon" /> Spotify</SpotifyButton>
      <div className="bandcamp-album">
          <iframe title="Misirlou Sisters by Glitch Kibbitz" style={{ border: '0', height: '150px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1366043256/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://glitchkibbitz.bandcamp.com/album/misirlou-sisters">Misirlou Sisters by Glitch Kibbitz</a></iframe>
      </div>

      <div className="bandcamp-album">
        <iframe title="Glitch Kibbitz by Glitch Kibbitz" style={{border: '0', height: '307px'}} src="https://bandcamp.com/EmbeddedPlayer/album=153649330/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="https://glitchkibbitz.bandcamp.com/album/glitch-kibbitz">Glitch Kibbitz by Glitch Kibbitz</a></iframe>
      </div>

      <h2>Performances</h2>

      <div className="video">
        <iframe title="MAGFest 2020 Performance" width="100%" height="432" src="https://www.youtube.com/embed/3SrmjG50jZU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>MAGFest 2020 Performance</iframe>
      </div>
      <div className="video">
        <iframe title="PAX West 2019 Performance" width="100%" height="432" src="https://www.youtube.com/embed/l4vw0j5zLlU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>PAX West 2019 Performance</iframe>
      </div>
    </>
  );
}
