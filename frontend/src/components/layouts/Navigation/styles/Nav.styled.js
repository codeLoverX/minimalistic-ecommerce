import styled from 'styled-components'

let Nav = styled.nav`
  padding: 40px 0;
  vertical-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > * {
    margin: 12px auto;
    box-sizing: border-box;

  }
  > :nth-child(1){
    order: 1;
    text-align: center;
    margin: auto;
    margin-top: 20px;
  }
  > :nth-child(1) > *{
    text-align: center;
    margin-left: 30px;
  }
  > :nth-child(2){
    text-align: center;
    margin: auto;
  }
  > :nth-child(3){
    order: 1;
    display: flex;
    justify-content: center;
  }
  > :nth-child(1){
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    justify-content: center;
    flex-direction: row;
    > :nth-child(1){
     display: flex;
     flex-direction: column;
     order: 0;
     flex-shrink: 1;
    }
    > :nth-child(1) > *{
      margin-left: auto;
      margin-top: auto;

     }
    > :nth-child(3){
      order: 0;
      
    }
    > :nth-child(2){
      background-color: transparent;
    }
  }
  
`
Nav.Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 10px;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    
  }
  cursor: pointer;
`

Nav.Link = styled.span`
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  line-height: 120%;
  text-align: center !important;
  padding: 0px 60px 60px 0px;
  text-transform: uppercase;
  & > a {
    color: black;
    text-decoration: none;
    ${({ active, theme }) => active && `
      color:  ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.primary};
      padding-bottom: 15px;
      margin-bottom: 15px;
      // text-decoration: underline;
      // text-decoration-color: ${theme.colors.primary};
      // text-underline-offset: 10px; 
  `}
  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 20px;

  }
  }
`

export default Nav