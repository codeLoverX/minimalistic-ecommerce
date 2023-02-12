import React, { Component, Fragment } from 'react'
import { CartItem, Product } from '../product/styles'
import { connect } from 'react-redux'
import { editCartAttributeAction, incrementValueToCartAction } from '../../redux/cart/cart-action'
import CartImagePreviewTab from './CartImagePreviewTab'
import AttributeItem from '../description/AttributeItem'

class CartItemComponent extends Component {
    editForm({ attribute, index, id, value }) {
        this.props.dispatchAddProductToCartAction({ attribute, index, id, value })
    }

    render() {

        let { cart, currentCurrency, cartIndex } = this.props
        return (

            <CartItem >
                <div>
                    <Product.Brand>
                        {cart.brand}
                    </Product.Brand>
                    <Product.Title>
                        {cart.name}
                    </Product.Title>
                    <Product.Price>
                        {currentCurrency.symbol} {cart.prices[currentCurrency.index].amount}
                    </Product.Price>
                    <br />
                    {
                        cart.attributes.map((attribute, attributeIndex) => {
                            return (
                                <Fragment key={`cart${attribute.name}${attributeIndex}`}>
                                    <Product.Subtitle >
                                        {attribute.name}
                                    </Product.Subtitle>
                                    {
                                        attribute.items.map((attributeItem) => {
                                            return (
                                                <AttributeItem
                                                    colorBoxCloned={<CartItem.Colorbox />}
                                                    sizeBoxCloned={<CartItem.Sizebox />}
                                                    attributeName={attribute.name}
                                                    // onClick={() => this.editForm({
                                                    //             attribute: attribute.name,
                                                    //              index: cartIndex, id: attributeItem.id, value: attributeItem.value
                                                    //          })}
                                                    displayValue={attributeItem.displayValue}
                                                    key={`cart${attributeItem.id}`}
                                                    active={attributeItem.id === cart.selectedAttributes[attribute.name]?.id}
                                                />
                                            )
                                        })
                                    }
                                </Fragment>)
                        })
                    }

                </div>
                <CartItem.ColumnTwo>
                    <CartItem.QuantitySizebox>
                        <CartItem.Sizebox onClick={() => this.props.dispatchIncrementValueToCartAction({ index: cartIndex, incrementQuantity: 1 })} paddingX={"3px"} paddingY={"3px"}>+</CartItem.Sizebox>
                        <span>{cart.quantity}</span>
                        <CartItem.Sizebox onClick={() => this.props.dispatchIncrementValueToCartAction({ index: cartIndex, incrementQuantity: -1 })} paddingX={"3px"} paddingY={"3px"}>-</CartItem.Sizebox>
                    </CartItem.QuantitySizebox>
                    <CartImagePreviewTab images={cart.gallery} />

                </CartItem.ColumnTwo>
            </CartItem>

        )
    }
}

export default connect(
    (state) => ({ currentCurrency: state.productReducer.currentCurrency }),
    (dispatch) => ({
        dispatchAddProductToCartAction: (newAttribute) => dispatch(editCartAttributeAction(newAttribute)),
        dispatchIncrementValueToCartAction: (change) => dispatch(incrementValueToCartAction(change))
    })
)(CartItemComponent)