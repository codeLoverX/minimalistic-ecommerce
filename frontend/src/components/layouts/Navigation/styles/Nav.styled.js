import styled from 'styled-components'

let Nav = styled.nav`
  padding: 0 5vw; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > * {
    box-sizing: border-box;
  }
  > :nth-child(1){
    display: flex;
    order: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    padding: 15px;
  }
 
  > :nth-child(2){
    display: flex;
    justify-content: center;
    margin: auto;
  }
  > :nth-child(3){
    order: 1;
    display: flex;
    justify-content: center;
  }
  
  @media (min-width: ${({ theme }) => theme.tablet}) {
    justify-content: center;
    flex-direction: row;
    > :nth-child(1){
      width: 300px;
      display: flex;
      flex-direction:row;
      justify-content: space-between;
      align-items: center;
    }
    > :nth-child(2){
      background-color: transparent;
      order: 1;
    }
  }
  
`
Nav.Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 10px;
  cursor: pointer;
`

Nav.Link = styled.span`
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  & > a {
    color: black;
    text-decoration: none;
    ${({ active, theme }) => active && `
      color:  ${theme.colors.primary};
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid ${theme.colors.primary};
    `}
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding-top: 20px;
    padding-bottom: 20px;
    & > a {
      color: black;
      ${({ active }) => active && `
      padding-bottom: 30px;
      `}
    }
  }
`

export default Nav