import * as React from 'react'
import Seo from '../components/Seo'
import { FaEnvelope } from 'react-icons/fa'

export default function ContactPage() {
    return (
        <>
            <Seo title={"Contact"} />
            <h1>Contact</h1>
            <p>Looking for some klezmer music to spice up your wedding, funeral, or VGM  con? Got a burning question about the freygish scale? Drop us a line.</p>
            <a href="mailto:glitchkibbitz@gmail.com" target="_blank" rel="noopener noreferrer" className="button"><FaEnvelope className="icon" /> Email Us</a>
        </>
    );
}
