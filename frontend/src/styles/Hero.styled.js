import styled from 'styled-components'

const HeroStyled = styled.div`
    display: grid;
    margin: 0 10vw;
    grid-template-columns: 1fr 1fr;
    max-height: 400px;
    overflow: hidden;
    justify-content: center;
    padding: 0;
    grid-auto-rows: 1fr;
    margin-bottom: 5vh;
`
HeroStyled.Text = styled.div`
    padding: 100px 60px;
    background: ${({ theme }) => `${theme.colors.hoverBg}`};
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