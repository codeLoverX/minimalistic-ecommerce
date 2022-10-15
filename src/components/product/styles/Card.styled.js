import styled from 'styled-components'


let Card = styled.div`
  cursor: pointer;
  // text-align: center;
  position: relative;
  top: 0;
  left: 0;
  margin: 0 auto;
  padding: 40px 0;
  & a {
    color: black;
    text-decoration: none;
  }
`

Card.Image = styled.img`
  display: block;
  height: 300px;
  width: 300px;
`

Card.Title = styled.div`
  margin-top: 25px;
  font-weight: 300;
  color: #1D1F22;
  font-size: 18px;
  line-height: 160%;
  ${({ inStock }) => !inStock && `
    color: #8D8F9A;
`}
`

Card.Subtitle = styled(Card.Title)`
  margin-top: 10px;
  font-weight: 500;
  ${({ inStock }) => !inStock && `
    color: #8D8F9A;
  `}
  ${({ isOverlay }) => isOverlay && `
    font-weight: lighter;
  `}
`

Card.OutOfStock = styled.div`
  position: absolute;
  color: grey;
  top: 40%;
  left: 20%;
  text-transform: uppercase;
  font-size: 24px;
  text-decoration: none;
`

export default Card