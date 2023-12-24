import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: Roboto, sans-serif;
  }


  h1, h2, h3 {
    font-weight: 700;
  }

  h1 {
    font-size: 1.875;
		color: #333;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  [disabled] {
    opacity: 1;
    cursor: not-allowed;
  }


`;
