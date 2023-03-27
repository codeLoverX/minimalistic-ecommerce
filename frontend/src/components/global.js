import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  main{
    min-height: 50vh;
  }

  a{
    text-decoration: none;
    color: black;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    font-size: 1.15em;
    margin: 0;
    padding: 0;
    @media (max-width: ${({ theme }) => theme.desktop}) {
      padding: 0.5em;
    }
  }

  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }

  .active{
    text-decoration: underline;
    text-underline-offset: 10px; 
    ${({  theme }) => `
      color:  ${theme.colors.primary};
      text-decoration-color: ${theme.colors.primary};
  `}
  }
  
  @media (max-width: ${({ theme }) => theme.desktop}) {
    .text-align-center-mobile{
      text-align: center;
   }
  }

  
  
`

export default GlobalStyles
