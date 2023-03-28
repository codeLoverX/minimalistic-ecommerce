import React, { Component } from 'react'
import ProductPreview from '../../components/description/DescriptionImagePreviewTab'
import ProductDescription from '../../components/description/DescriptionTextSection'
import { Description } from '../../styles'
import { withRouter } from 'react-router-dom'
import { catchError, fetchProducById } from '../../services/gqlApi'
import Navigation from '../../components/layouts/Navigation/Navigation'
import Footer from '../../components/layouts/Footer/Footer'
import ErrorNotification from '../../components/notification/error'
import Loading from '../../components/notification/loading'
import Trending from '../../components/landing/Trending'
import Newsletter from '../../components/landing/Newsletter'

class DescriptionPage extends Component {

    constructor() {
        super()

        this.state = {
            data: null,
            isLoading: true,
            isError: false
        }

        this.mounted = true
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentDidMount() {

        if (!this.mounted) return

        window.scrollTo(0, 0);

        let { productId } = this.props.match.params

        // if (!this.state.isLoading) return        
        catchError(
            fetchProducById(productId)
                .then((data) => {
                    return data.product
                })
        )
            .then(({ data, error }) => {
                this.setState({
                    data,
                    isLoading: false,
                    isError: error
                })
            })

    }

    render() {
        console.log({
            props: this.props,

        })
        return (
            <>
                <Navigation currentCategory={this.state.data?.category} />
                <main>
                    {
                        this.state.data &&
                        <>
                            <Description>
                                <ProductPreview images={this.state.data?.gallery} />
                                <ProductDescription description={{ ...this.state.data }} />
                            </Description>
                            <div>
                                <Trending />
                                <Newsletter />
                            </div>
                        </>
                    }
                    {
                        this.state.isError &&
                        <>
                            <div><ErrorNotification message="Could not fetch data..." /></div>
                        </>
                    }
                    {
                        this.state.isLoading &&
                        <>
                            <div><Loading /></div>
                        </>
                    }
                </main>
                <Footer />
            </>
        )
    }
}
export default (withRouter(DescriptionPage))