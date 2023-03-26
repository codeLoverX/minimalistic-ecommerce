import React, { Component } from 'react';
import HeroStyled from '../../styles/Hero.styled';
class Newsletter extends Component {
    render() {
        return (
            <HeroStyled id="comfortable">
                <HeroStyled.Text>
                    <div>
                        <h3>Comfortable & Elegante Living</h3>
                        <p>Products are all made to standard sizes so that you can mix and match them freely.</p>
                        <button>Shop now</button>
                    </div>
                </HeroStyled.Text>
                <HeroStyled.ImageContainer>
                <img src="/comfortable.jpg" alt="Comfortable living"/>
                </HeroStyled.ImageContainer>

            </HeroStyled>
        )
    }
}

export default Newsletter;
