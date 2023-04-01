import React, { Component } from 'react';
import styled from 'styled-components';

const FourOverlaysContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 5vh 10vw;
    padding: 0;
    gap: 10px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const FourOverlaysItem = styled.div`
    position: relative;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        :nth-child(1){
            grid-row: 1 / span 2;
            grid-column: 1 / span 2;
        }
        :nth-child(2){
            grid-row: 1 / span 2;
            grid-column: 3 / span 1;
        }
    }
`;
FourOverlaysItem.Text = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 0;
    color: white;
    font-weight: 900;
    font-size: 20px;
    padding: 10px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
    }
    @media (min-width: ${({ theme }) => theme.xl}) {
        font-size: 30px;
    }
    
`
FourOverlaysItem.Image = styled.img`
    width: 100%;
    height: 100%;
    object-ft: center;
    z-index: -1;
    filter: brightness(0.6);
    cursor: pointer;
    :hover{
        filter: brightness(1);
    }
`

class FourOverlaysItemComponent extends Component {
    render() {
        const { text, imageString, href } = this.props;
        return (
            <>
                <FourOverlaysItem>
                    <a href={href}>

                        <FourOverlaysItem.Image src={imageString} alt={text} />
                        <FourOverlaysItem.Text>
                            {text}
                        </FourOverlaysItem.Text>
                    </a>
                </FourOverlaysItem>
            </>
        );
    }
}

const array = [
    { imageString: "/comfortable.jpg", text: "Live comfortably", href: "#comfortable" },
    { imageString: "/harmonious.jpeg", text: "& harmoniously...", href: "#harmonious" },
    { imageString: "/technology.jpeg", text: "fashion", href: "/category/clothes" },
    { imageString: "/fashion.jpg", text: "technology", href: "/category/technology" },
];

class FourOverlaysComponent extends Component {
    render() {
        return (
            <FourOverlaysContainer>
                {
                    array.map((value, index) => (
                        <FourOverlaysItemComponent text={value.text} href={value.href} imageString={value.imageString} key={`${value}${index}`} />
                    ))
                }
            </FourOverlaysContainer>
        )
    }
}

export default FourOverlaysComponent;
