import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Dropdown } from './styles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DropdownIcon from './styles/DropdownIcon.styled'
import { changeCurrencyAction } from '../../../redux/products/products-action'
import OverlayCart from './OverlayCart'
import Currency from './Currency'

const initialState = {
    cartDropdown: true, currencyDropdown: true
}

class Navigation extends Component {
    state = {
        dropDownClose: { ...initialState }
    }

    // utility1
    changeOpacity(opacity) {
        let currentElement = document.querySelector('#nav')

        while (currentElement !== null) {

            let sibling = currentElement.nextElementSibling

            currentElement = sibling

            if (sibling) sibling.style.opacity = opacity
        }
    }

    toggleDropDownState(key) {
        this.setState(prevState => {
            let newDropDownClose = { ...initialState }

            newDropDownClose[key] = !prevState.dropDownClose[key]

            let currentStyle = this.navBarRef.current.style

            if ((newDropDownClose[key] === false)) {
                this.changeOpacity(0.3)

                currentStyle.zIndex = "999"

                this.addClickEventListener('click', this.handleClickOutside, true)
            }
            else {
                this.changeOpacity(1)

                currentStyle.zIndex = "1"

                document.removeEventListener('click', this.handleClickOutside, true);
            }

            return {
                ...prevState,
                dropDownClose: newDropDownClose
            }
        })
    }

    addClickEventListener() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        // if eventListener exists, remove eventListener.
        // if (document.getAttribute('listener') !== 'true') {
        document.removeEventListener('click', this.handleClickOutside, true);
        // }
    }

    componentDidMount() {
        const isMobile = window.matchMedia("(max-width: 1000px)").matches

        const logoContainer = document.querySelector("#navlinks")

        if (isMobile) logoContainer.style.display = "none"
    }

    handleClickOutside = event => {

        let currentStyle = this.navBarRef.current.style

        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.changeOpacity(1)

            currentStyle.zIndex = "1"

            this.setState({ dropDownClose: { ...initialState } })

            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }


    changeCurrency(currentCurrency) {
        this.props.dispatchChangeCurrencyAction(currentCurrency)

        this.toggleDropDownState('currencyDropdown')
    }

    constructor() {
        super()

        this.navBarRef = createRef()

        this.wrapperRef = createRef()

        this.toggleDropDownState = this.toggleDropDownState.bind(this)

        this.changeOpacity = this.changeOpacity.bind(this)

        this.routerDirectToCartPage = this.routerDirectToCartPage.bind(this)

        this.changeCurrency = this.changeCurrency.bind(this)

        this.addClickEventListener = this.addClickEventListener.bind(this)
    }

    routerDirectToCartPage() {
        // need to bind this
        this.props.history.push("../cart")
    }

    render() {

        return (
            <Nav ref={this.navBarRef} id='nav' >
                <div id="navlinks">
                    <Nav.Link
                        key={`0{1}`}
                        active={this.props.location.pathname === "/"}>
                        <Link to={`/`} replace>
                            Home
                        </Link>
                    </Nav.Link>
                    <>
                        {
                            this.props.categories &&
                            this.props.categories.map((value, index) => {
                                return (
                                    <>
                                        <Nav.Link
                                            active={this.props.match.params?.category === value.name || this.props.currentCategory === value.name}
                                            key={`${index} ${value.name}`}>
                                            <Link to={`../category/${value.name}`} replace>
                                                {value.name}
                                            </Link>
                                        </Nav.Link>

                                    </>
                                )
                            })

                        }
                    </>
                </div>
                <div onClick={
                    (event) => {
                        const navlinks = event.currentTarget.parentElement.children[0];
                        const isMobile = window.matchMedia("(max-width: 1000px)").matches
                        if (isMobile) {
                            if (navlinks.style.display === "none") navlinks.style.display = "flex"
                            else navlinks.style.display = "none"
                        }
                    }
                }>
                    <Nav.Icon src='/company.png' />
                </div>

                <div ref={this.wrapperRef}>
                    <Dropdown>
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState('currencyDropdown')}>
                            <DropdownIcon>
                                {this.props.currencies[this.props.currentCurrency].symbol}
                                <DropdownIcon.Arrow>⌄</DropdownIcon.Arrow></DropdownIcon>
                        </Dropdown.MenuButton>
                        <Dropdown.ItemContainer isInvisible={this.state.dropDownClose['currencyDropdown']}>
                            <Currency changeCurrency={this.changeCurrency} />
                        </Dropdown.ItemContainer>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState('cartDropdown')}>
                            <DropdownIcon>
                                <span role="img" aria-label='cart'>🛒 </span>
                                <DropdownIcon.Badge>
                                    {this.props.totalQuantity}
                                </DropdownIcon.Badge>
                            </DropdownIcon>
                        </Dropdown.MenuButton>
                        <Dropdown.ItemContainer isInvisible={this.state.dropDownClose['cartDropdown']}>
                            <OverlayCart routerDirectToCartPage={this.routerDirectToCartPage} />
                        </Dropdown.ItemContainer>
                    </Dropdown>
                </div>
            </Nav >
        )
    }
}


function mapStateToProps(state) {
    return {
        currencies: state.productReducer.currencies,
        categories: state.productReducer.categories,
        cart: state.cartReducer.cart,
        totalQuantity: state.cartReducer.totalQuantity,
        total: state.cartReducer.total,
        tax: state.cartReducer.tax,
        currentCurrency: state.productReducer.currentCurrency.index,
        loading: state.productReducer.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchChangeCurrencyAction: (currentCurrency) => dispatch(changeCurrencyAction(currentCurrency)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Navigation))


