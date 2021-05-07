import * as React from 'react'
import Seo from '../../components/Seo'
import ReactGodot from 'react-godot'
import IframeResizer from 'iframe-resizer-react'
import styled from 'styled-components'

const ShtetlDefender = styled.div`
  display: flex;
  min-height: 500px;
  @media (max-width: 588px) {
      min-height: 350px;
  }
`

export default function StarryShtetlDefenderPage() {
    return (
        <>
            <Seo title={"Starry Shtetl Defender"} />
            <h1>Starry Shtetl Defender</h1>

            <div className="bandcamp-album">
                <iframe title="Starry Shtetl by Glitch Kibbitz" style={{ border: '0', height: '150px' }} src="https://bandcamp.com/EmbeddedPlayer/album=819699252/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://glitchkibbitz.bandcamp.com/album/starry-shtetl">Starry Shtetl by Glitch Kibbitz</a></iframe>
            </div>

            <ShtetlDefender>
                <IframeResizer
                    style={{ border: '0', width: '100%'}}
                    title="Shtetl Defender"
                    src="https://gotm.io/browncanstudios/starryshtetldefender?forceFullscreen=true"
                />
            </ShtetlDefender>

            <i>Game not loading? Try <a href="/StarryShtetlDefenderExport/StarryShtetlDefender.html">this version</a>.</i>
        </>
    );
}