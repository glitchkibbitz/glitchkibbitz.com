import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF4949;
        --black: #2E2E2E;
        --yellow: #ffc600;
        --white: #fff;
        --off-white: rgb(232, 232, 232);
        --grey: #9e9b9ba3;
        --light-blue: #a5dbff;
        --light-purple: #2f1558a3;
        --dark-purple: #210e3e;
        --nav-background: #2f1558a3;
    }
    html, body {
        padding: 0;
        margin: 0;
        height: 100vh;
        min-height: 100%;
        overflow: auto;
    }
    body {

    }
    header {
        position: sticky;
        top: 0;
        background: var(--dark-purple);
        z-index: 100;
    }
    * {
        box-sizing: border-box;
    }
    h1 {
        font-weight: 700;
    }
    h2 {
        padding-top: 1em;
    }
    main {
        overflow-y: visible;
        height: 100%;
        width: 75%;
        //background: #9e9b9ba3;
        background: rgba(0, 0, 0, 0.85);
        border-radius: 5px;
        padding: 16px;
        text-align: center;
        margin-top: 2em;
        display: flex;
        flex-flow: column;
        justify-content: center;
    }
    footer {
        position: sticky;
        bottom: 0;
    }

    .bandcamp-album iframe {
        padding-top: 1em;
        width: 75%;
        //margin: 0 auto;
        max-width: 800px;
        min-width: 300px;
    }

    .video {
        padding-top: 1em;
        //max-width: 700px;
        margin: 0 7%;
    }

    button {
        display: inline-block;
        border: none;
        padding: 1rem 2rem;
        margin: 0;
        text-decoration: none;
        background: #0069ed;
        color: #ffffff;
        font-size: 1rem;
        cursor: pointer;
        text-align: center;
        transition: background 250ms ease-in-out,
                    transform 150ms ease;
        -webkit-appearance: none;
        -moz-appearance: none;
        border-radius: 5px;
        margin: .5em;
        width: 200px;
        align-self: center;
    }

    @media (max-width: 830px) {
        main {
            width: 100%;
            margin-top: 1em;
        }

        .bandcamp-album iframe {
            width: 100%;
        }
    }
`;

export default GlobalStyles;