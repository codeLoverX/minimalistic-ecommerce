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
  }
  > :nth-child(1){
    order: 1;
  }
  > :nth-child(2){
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  > :nth-child(3){
    order: 1;
  }
  > :nth-child(1){
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    justify-content: space-between;
    flex-direction: row;
    > :nth-child(1){

     order: 0;
    }
    > :nth-child(3){
      order: 0;
    }
    > :nth-child(2){
      background-color: transparent;
      width: auto;
      display: inline;
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
  width: 65px;
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  padding: 5px 60px 60px 0px;
  text-transform: uppercase;
  margin-right: 10px;
  & > a {
    color: black;
    text-decoration: none;
    ${({ active, theme }) => active && `
      box-sizing: border-box;
      color:  ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.primary};
      padding-bottom: 15px;
      margin-bottom: 15px;
      // text-decoration: underline;
      // text-decoration-color: ${theme.colors.primary};
      // text-underline-offset: 10px; 
  `}
  }
`

export default Nav