import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navigation from '../../components/layouts/Navigation/Navigation'
import Footer from '../../components/layouts/Footer/Footer'
import CardList from '../../components/listing/CardList'

class ListingPage extends Component {

    render() {
        // props defined here but not in constructor: console.log({props: this.props})
        let { category } = this.props.match.params

        let categoryInUpperCase = category.charAt(0).toUpperCase() + category.slice(1)

        return (
            <>
                <Navigation />
                <main>
                    <h3 className='text-align-center-mobile'> {categoryInUpperCase} </h3>
                    <CardList category={category} />
                </main>
                <Footer />
            </>
        )
    }
}

export default withRouter(ListingPage)
