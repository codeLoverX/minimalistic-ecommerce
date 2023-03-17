import styled from 'styled-components'

let CardList = styled.div`
display: grid;
justify-content: center;
@media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr 1fr;
}
@media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
}
@media (min-width: ${({ theme }) => theme.xl}) {
    grid-template-columns: repeat(4, 1fr);
}
`

export default CardList