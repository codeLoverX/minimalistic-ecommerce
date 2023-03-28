import { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardItem, CardList } from '../../styles'
import React from 'react'
import { catchError, fetchAllProductsByCategory } from '../../services/gqlApi'
import styled from 'styled-components';
import EmptyNotification from '../notification/empty'
import ErrorNotification from '../notification/error'
import Loading from '../notification/loading'
import { ReactComponent as Left } from "./left.svg"
import { ReactComponent as Right } from "./right.svg"

const NUMTRENDS = 4;

const TrendingStyled = styled.div`
    margin: 5vh 10vw;
    position: relative;
`
TrendingStyled.Button = styled.button`
    position: absolute;
    top: 60px;
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    border: 0px solid black;
    cursor: pointer;
    :hover{
        background: transparent;
        border: ${({ theme }) => `3px solid ${theme.colors.primary}`};
    }
`

TrendingStyled.ButtonRight = styled(TrendingStyled.Button)`
    right: 0;
`

TrendingStyled.ButtonLeft = styled(TrendingStyled.Button)`
    left: 0;
`
TrendingStyled.CardList = styled(CardList)`
`

TrendingStyled.CardItem = styled(CardItem)`
`

TrendingStyled.ImageContainer = styled(CardItem.ImageContainer)`
  height: 250px;
  width: 250px;
`

TrendingStyled.Image = styled(CardItem.Image)`
`

TrendingStyled.Title = styled(CardItem.Title)`
`

TrendingStyled.OutOfStock = styled(CardItem.OutOfStock)`
    left: 70%;
`



export default class Trending extends Component {
    constructor() {
        super()

        this.mounted = true
    }

    state = {
        data: [],
        index: 0,
        isLoading: false,
        isError: false
    }

    fetchAndSetComponentData() {
        let category = "all"

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
        console.log("hi")
        if (this.mounted) this.fetchAndSetComponentData()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    render() {
        return (
            <TrendingStyled>
                <h3 className=''>Trending</h3>
                <div>
                <TrendingStyled.ButtonLeft onClick={
                    () => {
                        this.setState((prev) => {
                            if (prev.index >= NUMTRENDS)
                                return { ...prev, index: prev.index - NUMTRENDS }
                        })
                    }
                }>
                    <Left width={25} height={25} fill="lightgreen"/>
                </TrendingStyled.ButtonLeft>
                <TrendingStyled.ButtonRight onClick={
                    () => {
                        this.setState((prev) => {
                            if (this.state.data[prev.index + NUMTRENDS] !== undefined)
                                return { ...prev, index: prev.index + NUMTRENDS }
                        })
                    }
                }>
                    <Right width={25} height={25} fill="lightgreen"/>
                </TrendingStyled.ButtonRight>
                </div>
                <TrendingStyled.CardList>
                    {
                        this.state.data !== null &&
                        <>
                            {
                                this.state.data?.map((cardValue, cardIndex) => {
                                    if (cardIndex < this.state.index || cardIndex >= this.state.index + NUMTRENDS) {
                                        return <> </>
                                    }
                                    return (
                                        <>
                                            <TrendingStyled.CardItem
                                            >
                                                <TrendingStyled.ImageContainer>
                                                    <Link
                                                        // {...this.generateLinkIfOutOfStock(cardValue.inStock)} 
                                                        to={`../product/${cardValue.id}`} replace>
                                                        <TrendingStyled.Image src={cardValue.gallery[0]} />
                                                        {cardValue.inStock ? <></> : <TrendingStyled.OutOfStock>Out of Stock</TrendingStyled.OutOfStock>}
                                                    </Link>
                                                </TrendingStyled.ImageContainer>
                                                <Link
                                                    // {...this.generateLinkIfOutOfStock(cardValue.inStock)} 
                                                    to={`../product/${cardValue.id}`} replace>

                                                    <TrendingStyled.Title inStock={cardValue.inStock}>
                                                        {cardValue.brand} {cardValue.name}
                                                    </TrendingStyled.Title>
                                                </Link>
                                            </TrendingStyled.CardItem>

                                        </>
                                    )

                                })
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
                         this.state.data !== null && !this.state.data[0] &&
                        <div>
                            <EmptyNotification message="The list is empty" />
                        </div>
                    }
                </TrendingStyled.CardList>

            </TrendingStyled>
        )
    }

}



