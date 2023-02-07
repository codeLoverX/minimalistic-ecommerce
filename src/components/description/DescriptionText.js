import { Component } from 'react'
import { connect } from 'react-redux'
import { Description } from '../product/styles'
import parse from 'html-react-parser';
import React from 'react'
import { addReadMoreAction, removeReadMoreAction, setReadMoreAction } from '../../redux/readmore/readmore-action';


class DescriptionText extends Component {
    constructor() {
        super()

        this.mounted = true

        this.scrollToReadmoreView = this.scrollToReadmoreView.bind(this)
    }

    scrollToReadmoreView() {
        const readMoreElement = document.getElementById("readmore")

        const descriptionElement = document.getElementById("description")

        console.log({isReadMore: this.props.isReadMore})
        if (this.props.isReadMore) {
            this.props.dispatchSetReadMoreWarning()



            // this.props.dispatchAddReadmore({ readMoreText: this.props.textProps })
            readMoreElement.scrollIntoView()


        }
        else {
            this.props.dispatchAddReadmore({ readMoreText: this.props.textProps })

            // this.props.dispatchSetReadMoreWarning()
            descriptionElement.scrollIntoView()
          

        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentDidMount() {


        const child = document.getElementById("description")


        const isExceeded = child.firstChild.clientHeight > 300

        if (isExceeded) {
            this.props.dispatchSetReadMoreWarning()

            child.firstChild.style.cssText = `
                whitespace: no-wrap;
                max-height: ${Number(child.clientHeight) - 50}px !important;
                margin-bottom: 30px;
                overflow: hidden;
                line-height: 20px;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 7;
                -webkit-box-orient: vertical;
            `
        }

        else {
            this.props.dispatchRemoveReadmore()
        }


    }
    render() {

        let { textProps } = this.props


        return (
            <Description.DescriptionText
                id="description"
            >
                <div>{parse(textProps)}</div>
                {
                    this.props.isReadMoreWarning &&
                    <Description.SeeFull onClick={this.scrollToReadmoreView}>
                        {this.props.isReadMore ? <>See less description</> : <>See full description</>}
                    </Description.SeeFull>
                }
            </Description.DescriptionText>
        )
    }
}

export default connect(
    (state) => (
        {
            isReadMore: state.readmoreReducer.isReadMore,
            isReadMoreWarning: state.readmoreReducer.isReadMoreWarning,
            readMoreText: state.readmoreReducer.readMoreText
        }),
    (dispatch) => ({
        dispatchRemoveReadmore: () => dispatch(removeReadMoreAction()),
        dispatchAddReadmore: (readMoreText) => dispatch(addReadMoreAction(readMoreText)),
        dispatchSetReadMoreWarning: () => dispatch(setReadMoreAction())

    })
)(DescriptionText)
