import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navigation from '../components/layouts/Navigation/Navigation'
import Footer from '../components/layouts/Footer/Footer'
import FourOverlaysComponent from '../components/landing/FourOverlays'
import HeroOneComponent from '../components/landing/HeroOne'
import HeroTwoComponent from '../components/landing/HeroTwo'
import Trending from '../components/landing/Trending'
import Newsletter from '../components/landing/Newsletter'

class Home extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <Navigation />
                <main>
                    <FourOverlaysComponent />
                    <HeroOneComponent />
                    <Trending />
                    <HeroTwoComponent />
                </main>
                <Newsletter />
                <Footer />
            </>
        )
    }
}

export default withRouter(Home)
