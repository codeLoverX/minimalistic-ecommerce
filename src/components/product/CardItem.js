import { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardItem } from './styles'
import { connect } from 'react-redux'
import React from 'react'

class CardItemComponent extends Component {
    // generateLinkIfOutOfStock(inStock) {
    //     return inStock ?
    //         null
    //         : { style: { pointerEvents: "none" } }
    // }

    render() {

        // No loop in this part, just expose component/ block made of elements!
        let { cardValue, currentCurrency } = this.props
        
        return (
            <>
                <CardItem>
                    <Link  
                        // {...this.generateLinkIfOutOfStock(cardValue.inStock)} 
                        to={`../product/${cardValue.id}`} replace>
                        <CardItem.Image src={cardValue.gallery[0]} />
                        <CardItem.Title inStock= {cardValue.inStock}>
                            {cardValue.brand} {cardValue.name}
                        </CardItem.Title>
                        {cardValue.inStock ? <></> : <CardItem.OutOfStock>Out of Stock</CardItem.OutOfStock>}
                        <CardItem.Subtitle inStock={cardValue.inStock}>
                            {currentCurrency.symbol} {cardValue.prices[currentCurrency.index].amount}
                        </CardItem.Subtitle>
                    </Link>
                </CardItem>

            </>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentCurrency: state.productReducer.currentCurrency,
    }
}

export default connect(
    mapStateToProps
)(CardItemComponent)