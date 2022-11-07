import { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardItem } from './styles'
import { connect } from 'react-redux'
import React from 'react'
import { Fragment } from 'react'

const controlQuickShop = {
    Button: 'showQuickShopButton',
    Options: 'showQuickShopOptions'
}

class CardItemComponent extends Component {
    state = {
        showQuickShopButton: false,
        showQuickShopOptions: false
    }

    constructor() {
        super()

        this.changeProperty = this.changeProperty.bind(this)
    }

    changeProperty(key, property) {
        this.setState((prev) => { return { ...prev, [key]: property } })
    }

    render() {

        // No loop in this part, just expose component/ block made of elements!
        let { cardValue, currentCurrency } = this.props
        console.log({ cardValue })
        return (
            <>
                <CardItem
                    onMouseEnter={() => this.changeProperty(controlQuickShop.Button, true)}
                    onMouseLeave={() => this.changeProperty(controlQuickShop.Button, false)}
                >
                    <CardItem.ImageContainer>
                        <Link
                            // {...this.generateLinkIfOutOfStock(cardValue.inStock)} 
                            to={`../product/${cardValue.id}`} replace>
                            <CardItem.Image src={cardValue.gallery[0]} />
                        </Link>
                        {
                            this.state.showQuickShopOptions &&
                            <Fragment>
                                <CardItem.QuickShopContainer>
                                    <CardItem.QuickShopContainerExit
                                        onClick={() => this.changeProperty(controlQuickShop.Options, false)}
                                    >
                                        X
                                    </CardItem.QuickShopContainerExit>
                                </CardItem.QuickShopContainer>
                            </Fragment>
                        }
                        {
                            this.state.showQuickShopButton &&
                            <Fragment>
                                <CardItem.QuickShopIcon onClick={() => this.changeProperty(controlQuickShop.Options, true)
                                }>
                                    <span role="img" aria-label='cart'>🛒 </span>
                                </CardItem.QuickShopIcon>
                            </Fragment>
                        }
                    </CardItem.ImageContainer>
                    <Link
                        // {...this.generateLinkIfOutOfStock(cardValue.inStock)} 
                        to={`../product/${cardValue.id}`} replace>

                        <CardItem.Title inStock={cardValue.inStock}>
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