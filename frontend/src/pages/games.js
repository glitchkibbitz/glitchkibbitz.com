import * as React from 'react'
import Seo from '../components/Seo'

export default function GamesPage() {
    return (
        <>
            <Seo title={"Games"} />
            <h1>Games</h1>
            <p>
                Glitch Kibbitz doesn't just make music—enjoy one of our custom games to accompany your klezmer listening session!
            </p>
            <div className="game">
                <a href="/games/starryShtetlDefender">Shtetl Defender</a>
            </div>
        </>
    );
}
