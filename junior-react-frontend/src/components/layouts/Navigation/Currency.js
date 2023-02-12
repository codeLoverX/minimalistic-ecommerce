import { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Dropdown } from './styles'
import React from 'react'

class Currency extends Component {

    render() {
        return (
            <>
                {
                    this.props.currencies && this.props.currencies.map((value, index) => {
                        return (
                            <Dropdown.ItemDiv
                                onClick={() => this.props.changeCurrency({ ...value, index })}
                                key={`${nanoid()}`
                                }
                            >
                                <span> {value.symbol} {value.label} </span>
                            </Dropdown.ItemDiv>
                        )
                    })
                }
            </>
        )
    }
}

export default connect(
    (state) => ({ currencies: state.productReducer.currencies, })
)(Currency)


