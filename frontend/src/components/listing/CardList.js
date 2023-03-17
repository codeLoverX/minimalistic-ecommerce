import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { Component } from 'react'
import { catchError, fetchAllProductsByCategory } from '../../services/gqlApi'
import EmptyNotification from '../notification/empty'
import ErrorNotification from '../notification/error'
import Loading from '../notification/loading'
import CardItem from './CardItem'
import { CardList } from '../product/styles'


class CardListComponent extends Component {
    constructor() {
        super()

        this.mounted = true
    }

    state = {
        data: [],
        isLoading: false,
        isError: false
    }

    fetchAndSetComponentData() {
        let { category } = this.props

        this.setState((prev) => {
            return { ...prev, loading: true }
        })

        catchError(
            fetchAllProductsByCategory(category)
                .then(data => data.category.products))
            .then(({ data, error }) => {
                this.setState({
                    data,
                    isLoading: false,
                    isError: error
                })
            })
    }

    componentDidMount() {
        if (this.mounted) this.fetchAndSetComponentData()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    componentDidUpdate(prevProps) {
        // if (this.props.router.params.category !== prevProps.router.params.category) {
        if (this.props.category !== prevProps.category && this.mounted) {
            this.fetchAndSetComponentData()
        }
    }

    render() {
        // props defined here but not in constructor: console.log({props: this.props})
        return (
            <>
                <CardList>
                    {
                        this.state.data !== null &&
                        <>
                            {
                                this.state.data?.map((value) =>
                                    <CardItem cardValue={value} key={nanoid()} />
                                )
                            }

                        </>

                    }
                    {
                        this.state.isError &&
                        <>
                            <ErrorNotification message="Could not fetch data" fullScreen={true} />
                        </>
                    }
                    {
                        this.state.isLoading &&
                        <>
                            <Loading />
                        </>
                    }
                    {
                        !this.state.data[0] &&
                        <div>
                            <EmptyNotification message="The list is empty" />
                        </div>
                    }
                </CardList>

            </>
        )
    }
}

export default CardListComponent