import { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardItem, CartItem, Product } from '../product/styles'
import { connect } from 'react-redux'
import React from 'react'
import { Fragment } from 'react'
import AttributeItem from '../description/AttributeItem'
import { addProductToCartAction } from '../../redux/cart/cart-action'

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

        this.setUpQuickShopState = this.setUpQuickShopState.bind(this)

        this.addForm = this.addForm.bind(this)

        this.submitForm = this.submitForm.bind(this)
    }

    changeProperty(key, property) {
        this.setState((prev) => { return { ...prev, [key]: property } })
    }

    setUpQuickShopState() {
        if (Object.hasOwn(this.state, 'attributes'))
            this.setState((prev) => {
                return {
                    ...prev, showQuickShopOptions: true,
                }
            })

        else this.setState((prev) => {
            return {
                ...prev, showQuickShopOptions: true,
                attributes: {}, missingAttributes: [], quantity: 1
            }
        })
    }

    addForm(attribute, { id, value }) {
        this.setState((prev) => {
            return { ...prev, attributes: { ...prev.attributes, [attribute]: { id, value } } }
        })
    }


    submitForm(event) {
        event.preventDefault()

        if (!this.props.cardValue.inStock) return

        let currentAtttributes = Object.keys(this.state.attributes)

        let missingAttributes = []

        let isEmptyForm = currentAtttributes.length === 0 && this.props.cardValue.attributes.length !== 0

        let isExistAllAttributes = true && !isEmptyForm

        if (isEmptyForm)
            missingAttributes = this.props.cardValue.attributes.map((attribute) => attribute.name)

        else {
            this.props.cardValue.attributes.forEach((attribute) => {

                let isExist = currentAtttributes.includes(attribute.name)

                if (!isExist) {
                    missingAttributes.push(attribute.name)

                    isExistAllAttributes = false
                }
            })
        }
        if (isExistAllAttributes) {
            this.props.dispatchAddProductToCartAction({
                ...this.props.cardValue, selectedAttributes: { ...this.state.attributes }, quantity: this.state.quantity
            })

            this.setState((prev) => { return { ...prev, missingAttributes: [] } })
        }

        else this.setState((prev) => { return { ...prev, missingAttributes } })
    }

    render() {

        // No loop in this part, just expose component/ block made of elements!
        let { cardValue, currentCurrency } = this.props
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
                                    <div>
                                        {
                                            cardValue.attributes.map((attribute, index) => {
                                                return (
                                                    <Fragment key={`${attribute.name}${index}`}>
                                                        <Product.Subtitle>
                                                            {attribute.name}
                                                        </Product.Subtitle>
                                                        {
                                                            attribute.items.map((attributeItem) => {
                                                                return (
                                                                    <AttributeItem
                                                                        colorBoxCloned={<CartItem.Colorbox />}
                                                                        sizeBoxCloned={<CartItem.Sizebox />}
                                                                        attributeName={attribute.name}
                                                                        onClick={() => this.addForm(attribute.name,
                                                                            { id: attributeItem.id, value: attributeItem.value })}
                                                                        displayValue={attributeItem.displayValue}
                                                                        key={`cart${attributeItem.id}`}
                                                                        active={attributeItem.id === this.state.attributes[attribute.name]?.id}
                                                                    />
                                                                )
                                                            })
                                                        }
                                                        <br />
                                                    </Fragment>)
                                            })
                                        }
                                    </div>
                                    {this.state.missingAttributes.length > 0
                                        && <CardItem.QuickShopAddToCartError>You have not selected the following attributes:
                                            {this.state.missingAttributes.map((value, index) =>
                                                <Fragment key={`${index}${value}`}> {index + 1}. {value}
                                                </Fragment>)}
                                        </CardItem.QuickShopAddToCartError>
                                    }
                                    {this.props.cardValue.inStock === false
                                        && <CardItem.QuickShopAddToCartError>
                                            You can't add out of stock item to cart
                                        </CardItem.QuickShopAddToCartError>
                                    }
                                    <CardItem.QuickShopAddToCart onClick={(event) => this.submitForm(event)}> ADD TO CART </CardItem.QuickShopAddToCart>
                                </CardItem.QuickShopContainer>
                            </Fragment>
                        }
                        {
                            this.state.showQuickShopButton &&
                            <Fragment>
                                <CardItem.QuickShopIcon onClick={this.setUpQuickShopState}>
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

export default connect(
    (state) => ({ currentCurrency: state.productReducer.currentCurrency }),
    (dispatch) => ({ dispatchAddProductToCartAction: (cart) => dispatch(addProductToCartAction(cart)) })
)(CardItemComponent)

