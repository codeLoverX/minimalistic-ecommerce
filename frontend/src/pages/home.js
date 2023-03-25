import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navigation from '../components/layouts/Navigation/Navigation'
import Footer from '../components/layouts/Footer/Footer'
import FourOverlaysComponent from '../components/landing/FourOverlays'
import HeroOneComponent from '../components/landing/HeroOne'


class Home extends Component {

    render() {
       
        return (
            <>
                <Navigation />
                <FourOverlaysComponent />
                <HeroOneComponent />
                <Footer />
            </>
        )
    }
}

export default withRouter(Home)
