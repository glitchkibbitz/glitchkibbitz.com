import * as React from 'react'
import Seo from '../components/Seo'

export default function GamesPage() {
    return (
        <>
            <Seo title={"Games"} />
            <h1>Games</h1>
            <p>
                Here's some fun games!
            </p>
            <div className="game">
                <a href="/games/shtetlDefender">Shtetl Defender</a>
            </div>
        </>
    );
}
