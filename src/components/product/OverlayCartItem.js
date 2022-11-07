import React, { Component, Fragment } from 'react'
import { OverlayCartItem } from './styles'
import { connect } from 'react-redux'
import { editCartAttributeAction, incrementValueToCartAction } from '../../redux/cart/cart-action'
import { sizeToDisplayMapper } from '../../utils/sizeToDisplayMapper'

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
                                            if (attribute.name.toLowerCase() === 'size')
                                            return (
                                                <OverlayCartItem.Sizebox
                                                    onClick={() => this.addForm(attribute.name,
                                                        { id: attributeItem.id, value: attributeItem.value })}
                                                    key={attributeItem.id}
                                                    active={attributeItem.id === cart.attributes[attribute.name]?.id}
                                                    paddingX={"3px"}
                                                    paddingY={"6px"}>
                                                        {
                                                            sizeToDisplayMapper[attributeItem.displayValue] ?  
                                                            sizeToDisplayMapper[attributeItem.displayValue] :
                                                            attributeItem.displayValue
                                                        }
                                                </OverlayCartItem.Sizebox>
                                            )
                                            if (attribute.name.toLowerCase() === 'color')
                                            return (
                                                <OverlayCartItem.Colorbox
                                                    active={attributeItem.id === cart.selectedAttributes[attribute.name]?.id}
                                                    // onClick={() => this.editForm({
                                                    //     attribute: attribute.name,
                                                    //     index: cartIndex, id: attributeItem.id, value: attributeItem.value
                                                    // })}
                                                    key={`overlayCart${attributeItem.id}`}
                                                    backgroundColor={attributeItem.displayValue}
                                                />
                                            )
                                            return (
                                                <OverlayCartItem.Sizebox
                                                    // onClick={() => this.editForm({
                                                    //     attribute: attribute.name,
                                                    //     index: cartIndex, id: attributeItem.id, value: attributeItem.value
                                                    // })}
                                                    key={`overlayCart${attributeItem.id}`}
                                                    active={attributeItem.id === cart.selectedAttributes[attribute.name]?.id}
                                                    paddingX={"3px"}
                                                    paddingY={"6px"}
                                                >                                                           
                                                    {attributeItem.displayValue}
                                                </OverlayCartItem.Sizebox>
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
                    <OverlayCartItem.PreviewImg src={cart.gallery[0]}/>
                </OverlayCartItem.ColumnTwo>
            </OverlayCartItem>

        )
    }
}


function mapStateToProps(state) {
    return {
        currentCurrency: state.productReducer.currentCurrency,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddProductToCartAction: (newAttribute) => dispatch(editCartAttributeAction(newAttribute)),
        dispatchIncrementValueToCartAction: (change) => dispatch(incrementValueToCartAction(change)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OverlayCartItemComponent)