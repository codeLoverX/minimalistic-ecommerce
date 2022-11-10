import React, { Component } from 'react'
import ProductPreview from '../../components/product/DescriptionImagePreviewTab'
import ProductDescription from '../../components/product/DescriptionTextSection'
import { Description } from '../../components/product/styles'
import { withRouter } from 'react-router-dom'
import { catchError, fetchProducById } from '../../services/gqlApi'
import Navigation from '../../components/layouts/Navigation/Navigation'
import Footer from '../../components/layouts/Footer/Footer'
import ErrorNotification from '../../components/notification/error'
import Loading from '../../components/notification/loading'
import { getReadMoreLessStripHTML } from '../../utils/getReadMoreLess'
// import parse from 'html-react-parser';

const BLOG_WORD_LIMIT = 800

class DescriptionPage extends Component {

    constructor() {
        super()

        this.state = {
            data: null,
            isLoading: true,
            isError: false
        }

        this.mounted = true

        this.renderIfData = this.renderIfData.bind(this)
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentDidMount() {

        if (!this.mounted) return

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


        // let { data, error } = await catchError(
        //     fetchProducById(productId)
        //         .then((data) => {
        //             return data.product
        //         })
        // )

        // console.log( { state: this.state } )

        // await this.setState({
        //     data,
        //     isLoading: false,                
        //     isError: error
        // })
    }

    renderIfData() {
        const { begin, end, exeededWordLimit } = getReadMoreLessStripHTML(this.state.data.description, BLOG_WORD_LIMIT)

        console.log({ begin, end, exeededWordLimit })
        return (
            <>
                <Description>
                    <ProductPreview images={this.state.data?.gallery} />
                    <ProductDescription description={{ ...this.state.data }} {...{ begin, exeededWordLimit }} />
                </Description>
                { exeededWordLimit && <div>{end}</div> }
            </>
        )
    }

    render() {

     
        return (
            <>
                <Navigation currentCategory={this.state.data?.category} />
                <main>
                    {
                        this.state.data && this.renderIfData()
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

export default withRouter(DescriptionPage)