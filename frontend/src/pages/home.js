import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navigation from '../components/layouts/Navigation/Navigation'
import Footer from '../components/layouts/Footer/Footer'
import FourOverlaysComponent from '../components/landing/FourOverlays'
import HeroOneComponent from '../components/landing/HeroOne'
import HeroTwoComponent from '../components/landing/HeroTwo'
import Trending from '../components/landing/Trending'

class Home extends Component {

    render() {
       
        return (
            <>
                <Navigation />
                <FourOverlaysComponent />
                <Trending />
                <HeroOneComponent />
                <HeroTwoComponent />
                <Footer />
            </>
        )
    }
}

export default withRouter(Home)
