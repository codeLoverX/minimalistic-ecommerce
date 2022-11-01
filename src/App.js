import './App.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/global'
import RoutesApp from './routes'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Loading from './components/notification/loading'
import { connect } from 'react-redux'
import { fetchAllCurrenciesAndCategoriesAction } from './redux/products/products-action'

const theme = {
  colors: {
    header: 'white',
    body: '#fff',
    footer: '#003333',
    primary: '#54DA7D',
    light: 'white',
    activeBg: 'rgb(217, 215, 215)',
    hoverBg: 'rgb(200, 200, 200, 0.3)',
  },
  mobile: '578px',
  tablet: '768px',
  desktop: '992px',
  xl: '1300px'
}

class App extends Component {

  componentDidMount() {
    console.log({props: this.props.loading})
    
    this.props.dispatchFetchAllCurrenciesAndCategories()
  }
  render() {  
      if (this.props.loading) return <Loading />
        // delete this  
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RoutesApp />
        </ThemeProvider>
      )
    }
}

function mapStateToProps(state) {
  return {
      loading: state.productReducer.loading
  }
}


function mapDispatchToProps(dispatch) {
  return {
      dispatchFetchAllCurrenciesAndCategories: () => dispatch(fetchAllCurrenciesAndCategoriesAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App))