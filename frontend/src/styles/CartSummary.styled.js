import styled from 'styled-components'

let CartSummary = styled.div`
    margin: 0 5vw; 
    font-size: 18px;
    #summary{
        text-align: right;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
        margin: 0 10vw; 
    }
`


export default CartSummary