import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../../components/layouts/Footer/Footer'
import Navigation from '../../components/layouts/Navigation/Navigation'
import CartList from '../../components/cart/CartList'
import { roundOffTwoDP } from '../../redux/cart/cart-utils'
import { CartSummary } from '../../styles'
class CartPage extends Component {

    render() {
        return (
            <>
                <Navigation />
                <main>
                    <h3 className='page-heading'> Cart </h3>
                    <CartSummary>
                    <CartList />
                    {
                        this.props.totalQuantity !== 0 &&
                        <div id="summary">
                            <p>Tax 21%:
                                &nbsp;
                                {this.props.currentCurrency.symbol}
                                {roundOffTwoDP(Number(this.props.total[this.props.currentCurrency.index]) * this.props.tax)}</p>
                            <p>Quantity: &nbsp;{this.props.totalQuantity}</p>
                            <p>Total: &nbsp;
                                {this.props.currentCurrency.symbol}
                                {

                                    roundOffTwoDP(Number(this.props.total[this.props.currentCurrency.index]) + Number(this.props.total[this.props.currentCurrency.index]) * this.props.tax)
                                }
                            </p>
                        </div>
                    }
                    </CartSummary>
                </main >
                <Footer />
            </>
        )
    }
}

export default connect(
    (state) => ({
        currentCurrency: state.productReducer.currentCurrency,
        total: state.cartReducer.total,
        totalQuantity: state.cartReducer.totalQuantity,
        tax: state.cartReducer.tax
    })
)(CartPage)

