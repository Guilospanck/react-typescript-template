import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        input:-internal-autofill-selected {
            background-color: none !important
        }
        font-family: 'Exo 2', sans-serif;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
        background-color: #FAFAFA;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-size: 14px;
        .MuiTooltip-tooltip {
            font-size: 12px;
        }
    }

    input:-webkit-autofill {
        background-color: red !important;
        background-image: none !important;
        margin: 6px;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
    }



`
