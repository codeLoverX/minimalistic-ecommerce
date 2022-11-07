import { Component,  Fragment } from 'react'
import OverlayCartItemComponent from './OverlayCartItem'
import { connect } from 'react-redux'
import { OverlayCartItem } from './styles'
import { nanoid } from '@reduxjs/toolkit'
import { roundOffTwoDP } from '../../redux/cart/cart-utils'
import React from 'react'

class OverLayCart extends Component {
   
    render() {
        return (
            <>
                <OverlayCartItem.Container>
                    <OverlayCartItem.Heading>My bag</OverlayCartItem.Heading>
                    {
                        this.props.cart && this.props.cart.map((value, cartIndex) => {
                            return (
                                <Fragment key={`${nanoid()}`}>
                                    <OverlayCartItemComponent cart={{ ...value }} cartIndex={cartIndex} />
                                </Fragment>
                            )
                        })
                    }
                    <OverlayCartItem.TotalQuantity>
                        {!this.props.totalQuantity ?
                            <h3>No items to display! </h3>
                            :
                            <>
                                <span>Total: </span>
                                <span>
                                    {
                                        this.props.currentCurrency.symbol
                                    }
                                    {roundOffTwoDP(
                                        Number(this.props.total[this.props.currentCurrency.index]) + Number(this.props.total[this.props.currentCurrency.index]) * this.props.tax)
                                    }
                                </span>
                            </>
                        }
                    </OverlayCartItem.TotalQuantity>
                    <OverlayCartItem.ButtonContainer>
                        <OverlayCartItem.ButtonViewCart onClick={()=> this.props.routerDirectToCartPage()}>
                            View bag
                        </OverlayCartItem.ButtonViewCart>
                        <OverlayCartItem.ButtonCheckoutCart>
                            Check out
                        </OverlayCartItem.ButtonCheckoutCart>
                    </OverlayCartItem.ButtonContainer>
                </OverlayCartItem.Container>

            </>
        )
    }
}

export default connect(
    (state)=> ({
        cart: state.cartReducer.cart,
        totalQuantity: state.cartReducer.totalQuantity,
        total: state.cartReducer.total,
        tax: state.cartReducer.tax,
        currentCurrency: state.productReducer.currentCurrency
    })
)(OverLayCart)


