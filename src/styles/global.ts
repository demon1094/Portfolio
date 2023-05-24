import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :target {
    scroll-margin-top: 25rem;
  }
  
  body {
    width: 100%;
    height: 100%;
    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    overflow-x: hidden;
    color: ${({ theme }) => theme.COLORS.WHITE };
    background: ${({ theme }) => theme.COLORS.BODY_BACKGROUND };
  }
  
  body * {
    transition: all 0.2s cubic-bezier(0.65, 0.29, 0.55, 1);
  }

  &::-webkit-scrollbar {
    width: 1.3rem;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BODY_BACKGROUND };
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border-radius: 2rem;
    background: ${({ theme }) => theme.COLORS.BLUE };
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE };
  }

  svg {
    color: ${({ theme }) => theme.COLORS.BLUE };
  }

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE };
  }

  .blue-text {
    color: ${({ theme }) => theme.COLORS.BLUE };
  }
`