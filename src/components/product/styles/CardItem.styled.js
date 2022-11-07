import styled from 'styled-components'
import CartItem from "./CartItem.styled"

let CardItem = styled.div`
  cursor: pointer;
  // text-align: center;
  position: relative;
  padding: 40px 0;
  & a {
    color: black;
    text-decoration: none;
  }
`
CardItem.ImageContainer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
`

CardItem.Image = styled.img`  
  object-fit: cover;
  height: 100%;
  width: 100%;
`

CardItem.Title = styled.div`
  margin-top: 25px;
  font-weight: 300;
  color: #1D1F22;
  font-size: 18px;
  line-height: 160%;
  ${({ inStock }) => !inStock && `
    color: #8D8F9A;
`}
`

CardItem.Subtitle = styled.div`
  margin-top: 10px;
  font-weight: 500;
  ${({ inStock }) => !inStock && `
    color: #8D8F9A;
  `}
  ${({ isOverlay }) => isOverlay && `
    font-weight: lighter;
  `}
`

CardItem.OutOfStock = styled.div`
  position: absolute;
  color: grey;
  top: 40%;
  left: 20%;
  text-transform: uppercase;
  font-size: 24px;
  text-decoration: none;
`

CardItem.QuickShopIcon = styled.button`
  background: transparent;
  border: 0px solid white;  
  position: absolute;
  bottom: -5%;
  right: 1%;
  transform: rotate(0, 180deg);
  z-index: 99;
  & span{
    font-size: 30px;
    cursor: pointer;
    color: transparent;  
    text-shadow: 0 0 0 ${({ theme }) => `${theme.colors.primary}`} !important;
  }
`

// QuickShop

CardItem.QuickShopContainer = styled.div`
  background: white;
  border: 0px solid white;  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

CardItem.QuickShopContainerExit = styled.div`
  background: black;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`

CardItem.QuickShopColorbox = styled(CartItem.Colorbox)`
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    margin-right: 5px;
    border: 1px solid black;
    background-color: ${({ backgroundColor }) => `${backgroundColor}`};
    ${({ active }) => active && `
        padding: 12px;
    ` }
    &:hover{
        outline: 1px solid ${({ theme }) => `${theme.colors.primary}`};
        padding: 9px;
    }
`

CardItem.QuickShopSizebox = styled(CartItem.Sizebox)`
    cursor: pointer;
    display: inline-block;
    padding: ${({ paddingX, paddingY }) =>
        `${paddingX} ${paddingY}`} ;
    font-size: small;
    margin-bottom: 20px;
    margin-right: 5px;
    border: 1px solid black;
    ${({ active }) => active && `
        background-color: black;
        color: white;
        font-weight: lighter;
        margin-bottom: 0px;
    ` }
    &:hover{
        background-color:  ${({ theme }) => `${theme.colors.hoverBg}`};
    }
`

CardItem.QuickShopAddToCartError = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 12px;
`

export default CardItem