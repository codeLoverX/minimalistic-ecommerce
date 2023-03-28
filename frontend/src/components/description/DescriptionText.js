import { Component } from 'react'
import { Description } from '../../styles'
import parse from 'html-react-parser';
import React from 'react'

class DescriptionText extends Component {
    render() {

        return (
            <Description.DescriptionText
            >
                <div>{parse(this.props.textProps)}</div>
            </Description.DescriptionText>
        )
    }
}

export default DescriptionText;
