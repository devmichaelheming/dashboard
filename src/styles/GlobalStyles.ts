import { createGlobalStyle } from "styled-components";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: auto;
    background: var(--primary);

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #9DA0AA;
        border-radius: 4px;
    }
  }

  .content {
    padding: 70px 0 24px 0px;
    width: 100%;
    height: auto;
  }
  
  *, button, input {
    font-family: "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5 {
    color: var(--secondary);
  }

  span {
    color: var(--tertiary);
  }

  :root {
    --primary: #EEF2F4;
    --secondary: #7d8386;
    --tertiary: #707B81;
    --quaternary: #646871;
    --quinary: #393d42;
    --senary: #828386;

    --button: #0077b5;
    --buttonHover: #026091;
  }
`;
