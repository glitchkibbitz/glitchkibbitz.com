import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import StyledFullBackground from './DynamicBackground'
import 'normalize.css'

export default function Layout({ children }) {
    return (
    <>
        <GlobalStyles />
        <Typography />
        <header><Nav /></header>
        <StyledFullBackground imgName="band-pic.jpg">
        <main>
            {children}
        </main>
        <Footer />
        </StyledFullBackground>
    </>
    );
}