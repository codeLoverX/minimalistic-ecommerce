import styled from 'styled-components'

let Description = styled.div`
    display: flex; 
    flex-wrap: wrap;
    max-height: 80vh;
    @media (max-width: ${({ theme }) => theme.tablet}) {
        max-height: min-content;
    }
`

Description.Preview = styled.span`
    flex-basis: 100%; 
    text-align: center;
    position: reative;
    max-height: 50vh;
    & img {
        object-fit: cover;
        margin: auto
        max-width: 80%;
        max-height: 100%;
    }
    @media (min-width: ${({ theme }) => theme.tablet}) {
        flex-basis: 50%;
        max-height: 70vh;
        & img {
            max-height: 100%;
            max-width: 100%;
        }
    }

`
Description.ControlPreview = styled.span`
    flex-basis: 10%;
    max-height: 80vh;
    text-align: center;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 5px;
        background: ${({ theme }) => `${theme.colors.hoverBg}`}; 
    }
    cursor-pointer;
    position: reative;
    & img {
        object-fit: cover;
        max-width: 90%;
        margin: auto; 
        cursor: pointer;
    }
    @media (max-width: ${({ theme }) => theme.tablet}) {
        ::-webkit-scrollbar {
            height: 5px;
        }
        flex-basis: 100%; 
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
        margin: 25px 10%; 
        width: 90vw;
        & img {
            width: 100px;
            height: 100px;
        }
    }
`

Description.TextSection = styled.span`
    flex-basis: 40%;  
    max-height: min-content; 
    @media (max-width: ${({ theme }) => theme.tablet}) {
        flex-basis: 100%; 
        text-align: center;
    }
`

Description.AddToCart = styled.button`
    display: inline-block;
    cursor: pointer;
    padding: 15px;
    width: 250px;
    text-align: center;
    font-size: 15px;
    margin-right: 5px;
    margin-top: 10px;
    border: 0px solid black;
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.light}`};
    &:hover{
        background-color:  ${({ theme }) => `${theme.colors.hoverBg}`};
        color: black;
    }  
`

Description.AddToCartError = styled.div`
    color: red;
    margin-top: 5px;
    font-size: 12px;
`

Description.DescriptionText = styled.div`
    height: min-content;
    @media (max-width: ${({ theme }) => theme.tablet}) {
        height: 300px;
    }
    font-size: medium; 
    font-weight: 600; 
`
Description.SeeFull = styled.div`
    color: red;
    padding-top: 10px;
    cursor: pointer;
    text-decoration: underline; 
`

export default Description