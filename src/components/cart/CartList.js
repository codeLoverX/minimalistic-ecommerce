import { nanoid } from '@reduxjs/toolkit'
import { Component } from 'react'
import { connect } from 'react-redux'
import EmptyNotification from '../notification/empty'
import CartItem from './CartItem'
import React from 'react'

class CartPage extends Component {

    render() {
        return (
            <>
                {
                    this.props.cart[0] ?
                        this.props.cart.map((value, cartIndex) => {
                            return (
                                <CartItem cart={{ ...value }} cartIndex={cartIndex} key={nanoid()} />
                            )
                        })
                        :
                        <EmptyNotification message="The cart is empty..."/>
                }
            </>
        )
    }
}
export default connect(
    (state) => ({ cart: state.cartReducer.cart })
)(CartPage)

