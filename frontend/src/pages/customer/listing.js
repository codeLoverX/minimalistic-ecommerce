import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navigation from '../../components/layouts/Navigation/Navigation'
import Footer from '../../components/layouts/Footer/Footer'
import CardList from '../../components/listing/CardList'

class ListingPage extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        // props defined here but not in constructor: console.log({props: this.props})
        let category ="";
        if (this.props.match.params.category){
            category  = this.props.match.params.category
        }
        else {
            category = "all"
        }

        let categoryInUpperCase = category.charAt(0).toUpperCase() + category.slice(1)
        
        return (
            <>
                <Navigation />
                <main>
                    <h3 className='page-heading'> {categoryInUpperCase} </h3>
                    <CardList category={category} />
                    <br/>
                </main>
                <Footer />
            </>
        )
    }
}

export default withRouter(ListingPage)
