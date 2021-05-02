import * as React from 'react'
import Seo from '../../components/Seo'
import ReactGodot from 'react-godot'

export default function StarryShtetlDefenderPage() {
    return (
        <>
            <Seo title={"Starry Shtetl Defender"} />
            <h1>Starry Shtetl Defender</h1>
            <ReactGodot execname='/StarryShtetlDefenderExport/Starry Shtetl Defender' />
        </>
    );
}