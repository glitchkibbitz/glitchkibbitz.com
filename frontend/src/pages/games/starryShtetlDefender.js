import * as React from 'react'
import Seo from '../../components/Seo'
import ReactGodot from 'react-godot'
import IframeResizer from 'iframe-resizer-react'
import styled from 'styled-components'

const ShtetlDefender = styled.div`
  display: flex;
  min-height: 500px;
`

export default function StarryShtetlDefenderPage() {
    return (
        <>
            <Seo title={"Starry Shtetl Defender"} />
            <h1>Starry Shtetl Defender</h1>

            <div className="bandcamp-album">
                <iframe title="Misirlou Sisters by Glitch Kibbitz" style={{ border: '0', height: '150px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1366043256/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://glitchkibbitz.bandcamp.com/album/misirlou-sisters">Misirlou Sisters by Glitch Kibbitz</a></iframe>
            </div>

            <ShtetlDefender>
                <IframeResizer
                    style={{ border: '0', width: '100%', height: '' }}
                    title="Shtetl Defender"
                    src="https://gotm.io/browncanstudios/starryshtetldefender?forceFullscreen=true"
                />
            </ShtetlDefender>
        </>
    );
}