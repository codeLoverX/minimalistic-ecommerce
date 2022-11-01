import styled from 'styled-components'


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

CardItem.Image = styled.img`  
  object-fit: cover;
  height: 300px;
  width: 300px;
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

CardItem.Subtitle = styled(CardItem.Title)`
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

export default CardItem