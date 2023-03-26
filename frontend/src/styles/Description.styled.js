import styled from 'styled-components'

let Description = styled.div`
    display: flex; 
    flex-wrap: wrap;
    max-height: 50vh;
    @media (max-width: ${({ theme }) => theme.tablet}) {
        max-height: min-content;
        min-width: 400px;
        max-width: 600px;
        margin: 0 auto;
    }
`
Description.Preview = styled.span`
    flex-basis: 100%; 
    text-align: center;
    position: reative;
    & img {
        object-fit: cover;
        margin: auto
        max-width: 80%;
    }
    @media (min-width: ${({ theme }) => theme.tablet}) {
        flex-basis: 50%;
        & img {
            padding: 0 30px;
            height: 50vh;

        }
    }

`
Description.ControlPreview = styled.span`
    flex-basis: 10%;
    max-height: 50vh;
    text-align: center;
    overflow-y: auto;
    cursor-pointer;
    position: reative;
    & img {
        object-fit: cover;
        width: 90%;
        height: 100px;
        margin: auto; 
        cursor: pointer;
    }
    @media (max-width: ${({ theme }) => theme.tablet}) {
      
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
    padding: 20px 30px; 
    margin: 25px 0; 
    background-color: ${({ theme }) => `${theme.colors.hoverBg}`};
    @media (max-width: ${({ theme }) => theme.tablet}) {
        flex-basis: 100%; 
        text-align: center;
        max-height: min-content; 
        padding-left: 0px;
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
    color: black;
    &:hover{
        background-color: transparent;
        color: black;
        border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    }  
`
Description.AddToCartError = styled.div`
    color: red;
    margin-top: 5px;
    font-size: 12px;
`
Description.DescriptionText = styled.div`
    height: min-content;
    font-size: medium; 
    font-weight: 600; 
`
Description.SeeFullButton = styled.div`
    color: red;
    display: block;
    padding-top: 10px;
    cursor: pointer;
    text-decoration: underline; 
    @media (min-width: ${({ theme }) => theme.tablet}) {
    }
`
Description.SeeFullHeading = styled.div`
    color: red;
    display: block;
    margin-top: 20px;
    padding-top: 0px;
    cursor: pointer;
    text-align: center;
    hr{
        display: none;
    }
    @media (min-width: ${({ theme }) => theme.tablet}) {
        hr{
            display: block;
        }
        margin-top: 20px;
        padding-top: 20px;
    }
`
Description.SeeFullText = styled(Description.DescriptionText)`
   text-align: center;
`
export default Description