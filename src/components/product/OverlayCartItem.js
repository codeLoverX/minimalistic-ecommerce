import React, { Component, Fragment } from 'react'
import { OverlayCartItem } from './styles'
import { connect } from 'react-redux'
import { editCartAttributeAction, incrementValueToCartAction } from '../../redux/cart/cart-action'
import AttributeItem from './AttributeItem'

class OverlayCartItemComponent extends Component {

    editForm({ attribute, index, id, value }) {
        this.props.dispatchAddProductToCartAction({ attribute, index, id, value })
    }

    render() {
        let { cart, currentCurrency, cartIndex } = this.props

        return (
            <OverlayCartItem>
                <div>
                    <OverlayCartItem.Brand>
                        {cart.brand}
                    </OverlayCartItem.Brand>
                    <OverlayCartItem.Title>
                        {cart.name}
                    </OverlayCartItem.Title>
                    <OverlayCartItem.Price>
                        {currentCurrency.symbol} {cart.prices[currentCurrency.index].amount}
                    </OverlayCartItem.Price>
                    {
                        cart.attributes.map((attribute, attributeIndex) => {
                            return (
                                <Fragment key={`cart${attribute.name}${attributeIndex}`}>
                                    <OverlayCartItem.Subtitle>
                                        {attribute.name}
                                    </OverlayCartItem.Subtitle>
                                    {
                                        attribute?.items.map((attributeItem) => {
                                            return (
                                                <AttributeItem
                                                    colorBoxCloned={<OverlayCartItem.Colorbox />}
                                                    sizeBoxCloned={<OverlayCartItem.Sizebox />}
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
                <OverlayCartItem.ColumnTwo>
                    <OverlayCartItem.QuantitySizebox>
                        <OverlayCartItem.Sizebox
                            onClick={() => this.props.dispatchIncrementValueToCartAction({ index: cartIndex, incrementQuantity: 1 })}
                            paddingX={"3px"}
                            paddingY={"3px"}>
                            +
                        </OverlayCartItem.Sizebox>
                        <span>{cart.quantity}</span>
                        <OverlayCartItem.Sizebox
                            onClick={() => this.props.dispatchIncrementValueToCartAction({ index: cartIndex, incrementQuantity: -1 })}
                            paddingX={"3px"}
                            paddingY={"3px"}>
                            -
                        </OverlayCartItem.Sizebox>
                    </OverlayCartItem.QuantitySizebox>
                    <OverlayCartItem.PreviewImg src={cart.gallery[0]} />
                </OverlayCartItem.ColumnTwo>
            </OverlayCartItem>

        )
    }
}

export default connect(
    (state) => ({ currentCurrency: state.productReducer.currentCurrency }),
    (dispatch) => ({
        dispatchAddProductToCartAction: (newAttribute) => dispatch(editCartAttributeAction(newAttribute)),
        dispatchIncrementValueToCartAction: (change) => dispatch(incrementValueToCartAction(change))
    })
) (OverlayCartItemComponent)