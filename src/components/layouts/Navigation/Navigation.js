import { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Dropdown } from './styles'
import CompanyLogo from '../../../images/company.png'
import { connect } from 'react-redux'
import { withRouterHOC } from '../../../utils/withRouterHOC'
import DropdownIcon from './styles/DropdownIcon.styled'
import { changeCurrencyAction, fetchAllCurrenciesAndCategoriesAction } from '../../../redux/products/products-action'
import OverlayCart from '../../product/OverlayCart'
import Currency from '../../product/Currency'
import ReactDOM from 'react-dom';
import Loading from '../../notification/loading'

const initialState = {
    cartDropdown: true, currencyDropdown: true
}

class Navigation extends Component {
    state = {
        dropDownClose: { ...initialState }
    }

    componentDidMount() {
        console.log({props: this.props.loading})
        
        this.props.dispatchFetchAllCurrenciesAndCategories()
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

            let currentStyle = this.myRef.current.style

            if ((newDropDownClose[key] === false)) {
                this.changeOpacity(0.3)

                currentStyle.zIndex = "999"

                this.addClickEventListener()
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
    
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        let currentStyle = this.myRef.current.style
    
        if (!domNode || !domNode.contains(event.target)) {
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

        this.myRef = createRef()

        this.toggleDropDownState = this.toggleDropDownState.bind(this)

        this.changeOpacity = this.changeOpacity.bind(this)

        this.routerDirectToCartPage = this.routerDirectToCartPage.bind(this)

        this.changeCurrency = this.changeCurrency.bind(this)

        this.addClickEventListener = this.addClickEventListener.bind(this)
    }

    routerDirectToCartPage() {
        // need to bind this
        this.props.router.navigate("../cart")
    }

    render() {
        if (this.props.loading) return <Loading />
        // delete this
        return (
            <Nav ref={this.myRef} id='nav'>
                <div>
                    {
                        this.props.categories &&
                        this.props.categories.map((value, index) => {
                            return (
                                <Nav.Link
                                    active={this.props.router.params?.category === value.name || this.props.currentCategory === value.name}
                                    key={`${index} ${value.name}`}>
                                    <Link to={`../category/${value.name}`} replace>
                                        {value.name}
                                    </Link>
                                </Nav.Link>
                            )
                        })

                    }
                </div>
                <div>
                    <Nav.Icon src={CompanyLogo} />
                </div>
                <div>
                    <Dropdown>
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState('currencyDropdown')}>
                            <DropdownIcon>
                                {this.props.currencies[this.props.currentCurrency].symbol}
                                <DropdownIcon.Arrow>⌄</DropdownIcon.Arrow></DropdownIcon>
                        </Dropdown.MenuButton>
                        <Dropdown.ItemContainer isInvisible={this.state.dropDownClose['currencyDropdown']}>
                           <Currency changeCurrency={this.changeCurrency}/>
                        </Dropdown.ItemContainer>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.MenuButton onClick={() => this.toggleDropDownState('cartDropdown')}>
                            <DropdownIcon>
                                🛒
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
        dispatchFetchAllCurrenciesAndCategories: () => dispatch(fetchAllCurrenciesAndCategoriesAction())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouterHOC(Navigation))


