import React, { Component } from 'react';
import styled from 'styled-components';

const HeroOneStyled = styled.div`
    display: grid;
    margin: 0 10vw;
    grid-template-columns: 1fr 1fr;
    max-height: 400px;
    overflow: hidden;
    justify-content: center;
    padding: 0;
    grid-auto-rows: 1fr;
`
HeroOneStyled.Text = styled.div`
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
HeroOneStyled.ImageContainer = styled.div`
    padding: 0;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        object-fit: center;
    }
`

class HeroOneComponent extends Component {
    render() {
        return (
            <HeroOneStyled>
                <HeroOneStyled.Text>
                    <div>
                        <h3>Comfortable & Elegante Living</h3>
                        <p>Products are all made to standard sizes so that you can mix and match them freely.</p>
                        <button>Shop now</button>
                    </div>
                </HeroOneStyled.Text>
                <HeroOneStyled.ImageContainer>
                <img src="/comfortable.jpg" alt="Comfortable living"/>
                </HeroOneStyled.ImageContainer>

            </HeroOneStyled>
        )
    }
}

export default HeroOneComponent;
