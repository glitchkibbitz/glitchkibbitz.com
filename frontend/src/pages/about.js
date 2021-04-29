import * as React from 'react'
import Seo from '../components/Seo'
import styled from 'styled-components'

const MusicianList = styled.ul`
    list-style: none;
`

export default function AboutPage() {
    return (
        <>
            <Seo title={"About"} />
            <h1>About</h1>
            <p>
                Shortly before PAX West 2019, a stroke of good mazel brought Glitch Kibbitz into existence. Their first performance took place in PAX's Jamspace, featuring 9 original arrangements of video game tunes—all written and practiced in the month before the event. (Hopefully it didn't show too much...)
            </p><p>
                After PAX, GK continued to expand their repertoire, and followed up with a performance at the MAGFest 2020 Belvedere Lobby Bar. Over 2020 and 2021, they collaborated remotely, creating several tracks for Materia Community albums, 2 singles, and a self-titled EP.
            </p>
            <p>Glitch Kibbitz is composed of 5 musicians:
            <MusicianList>
                    <li>Nikola Whallon (composer, violin)</li>
                    <li>Kevin Vitz-Wong (clarinet)</li>
                    <li>Brandon Hailey (saxophone)</li>
                    <li>Tyler Eveland (trombone)</li>
                    <li>Shir Goldberg (bass)</li>
                </MusicianList>
            </p>
        </>
    );
}
