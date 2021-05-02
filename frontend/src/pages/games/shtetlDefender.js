import * as React from 'react'
import Seo from '../../components/Seo'
import ReactGodot from 'react-godot'
import styled from 'styled-components'

const ShtetlDefender = styled.div`
  height: 1000px !important;
`

export default function StarryShtetlDefenderPage() {
    return (
        <ShtetlDefender>
            <Seo title={"Starry Shtetl Defender"} />
            <h1>Starry Shtetl Defender</h1>
            <div className="bandcamp-album">
                <iframe title="Misirlou Sisters by Glitch Kibbitz" style={{ border: '0', height: '150px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1366043256/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://glitchkibbitz.bandcamp.com/album/misirlou-sisters">Misirlou Sisters by Glitch Kibbitz</a></iframe>
            </div>
            <ReactGodot execname='/StarryShtetlDefenderExport/Starry Shtetl Defender' resize={true} />
        </ShtetlDefender>
    );
}