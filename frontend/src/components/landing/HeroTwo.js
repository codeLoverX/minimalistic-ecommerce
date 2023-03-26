import React, { Component } from 'react';
import HeroStyled from '../../styles/Hero.styled';

class HeroTwoComponent extends Component {
    render() {
        return (
            <HeroStyled id="harmonious">
                 <HeroStyled.ImageContainer>
                <img src="/harmonious-living.png" alt="Harmonious living"/>
                </HeroStyled.ImageContainer>

                <HeroStyled.Text>
                    <div>
                        <h3>Harmonious Living</h3>
                        <p>Mordern life should be harmonious with nature.</p>
                        <button>Shop now</button>
                    </div>
                </HeroStyled.Text>
               
            </HeroStyled>
        )
    }
}

export default HeroTwoComponent;
