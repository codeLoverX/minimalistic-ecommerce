import styled from 'styled-components'

const HeroStyled = styled.div`
    display: grid;
    margin: 0 10vw;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    justify-content: center;
    margin-bottom: 5vh;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        grid-template-columns: repeat(2, 1fr);
        max-height: 400px;
        overflow: hidden;
        padding: 0;
    }
`
HeroStyled.Text = styled.div`
    background: ${({ theme }) => `${theme.colors.hoverBg}`};
    padding-top: 10%;
    padding-right: 5%;
    padding-left: 5%;
    button{
        font-size: 18px;
        background-color: ${({ theme }) => `${theme.colors.primary}`};
        border: 0px solid white;
        color: black;
        padding: 10px;
        :hover{
            background-color: transparent;
            color: black;
            border: ${({ theme }) => `3px solid ${theme.colors.primary}`};
        }
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
        padding-left: 60px;
        padding-right: 60px;
        padding-top: 10%;
    }
`
HeroStyled.ImageContainer = styled.div`
    padding: 0;
    width: 100%;
    height: 100%;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

export default HeroStyled;