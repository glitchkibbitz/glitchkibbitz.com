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
    }
    * {
        box-sizing: border-box;
    }
    h1 {
        font-weight: 700;
    }
    main {
        width: 75%;
        //background: #9e9b9ba3;
        background: rgba(0, 0, 0, 0.85);
        border-radius: 5px;
        padding: 16px;
        text-align: center;
    }
`;

export default GlobalStyles;