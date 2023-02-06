import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addProductToCartAction } from '../../redux/cart/cart-action'
import { CartItem, Description, Product } from './styles'
import React from 'react'
import AttributeItem from './AttributeItem'
import DescriptionText from './DescriptionText'

const initialState = { attributes: {}, missingAttributes: [], quantity: 1 }

class ProductDescription extends Component {
    state = { ...initialState }

    addForm(attribute, { id, value }) {
        this.setState((prev) => {
            return { attributes: { ...prev.attributes, [attribute]: { id, value } } }
        })
    }

    submitForm(event) {
        event.preventDefault()

        if (!this.props.description.inStock) return

        let currentAtttributes = Object.keys(this.state.attributes)

        let missingAttributes = []

        let isEmptyForm = currentAtttributes.length === 0 && this.props.description.attributes.length !== 0

        let isExistAllAttributes = true && !isEmptyForm

        if (isEmptyForm)
            missingAttributes = this.props.description.attributes.map((attribute) => attribute.name)

        else {
            this.props.description.attributes.forEach((attribute) => {

                let isExist = currentAtttributes.includes(attribute.name)

                if (!isExist) {
                    missingAttributes.push(attribute.name)

                    isExistAllAttributes = false
                }
            })
        }
        if (isExistAllAttributes) {
            this.props.dispatchAddProductToCartAction({
                ...this.props.description, selectedAttributes: { ...this.state.attributes }, quantity: this.state.quantity
            })

            this.setState((prev) => { return { ...prev, missingAttributes: [] } })
        }

        else this.setState((prev) => { return { ...prev, missingAttributes } })
    }

    render() {

        let { description, currentCurrency } = this.props

        return (
            <>
                <Description.TextSection>
                    <Product.Brand fontSize={"35px"}>
                        {description.brand}
                    </Product.Brand>
                    <Product.Title fontSize={"25px"}>
                        {description.name}
                    </Product.Title>
                    <br />
                    {
                        description.attributes.map((attribute, index) => {
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
                    <Product.Subtitle>
                        Price
                    </Product.Subtitle>
                    <Product.Price>
                        {currentCurrency.symbol} {description.prices[currentCurrency.index].amount}
                    </Product.Price>
                    <br />
                    {this.state.missingAttributes.length > 0
                        && <Description.AddToCartError>You have not selected the following attributes:
                            {this.state.missingAttributes.map((value, index) =>
                                <Fragment key={`${index}${value}`}> {index + 1}. {value}
                                </Fragment>)}
                        </Description.AddToCartError>
                    }
                    {description.inStock === false
                        && <Description.AddToCartError>
                            You can't add out of stock item to cart
                        </Description.AddToCartError>
                    }
                    <Description.AddToCart onClick={(event) => this.submitForm(event)}> ADD TO CART </Description.AddToCart>
                    <br />
                    <br />
                    <DescriptionText
                        textProps={description.description}
                    />
                </Description.TextSection>
            </>
        )
    }
}

export default connect(
    (state) => ({ currentCurrency: state.productReducer.currentCurrency }),
    (dispatch) => ({ dispatchAddProductToCartAction: (cart) => dispatch(addProductToCartAction(cart)) })
)(ProductDescription)
