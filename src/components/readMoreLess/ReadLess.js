import React, { Component } from 'react'
import { ShowReadMoreContext } from '../../context/readMore';

// context second type implementation of consumer!!
class ReadLessComponent extends Component {
    render() {
        console.log({ context: this.context })

        return (
            <>
                {this.context.readMoreState === false &&
                    <>
                        {this.props.children}
                        <span className='readMore' onClick={this.context.toggleReadMoreState}> Read Less.. </span>
                    </>
                }
            </>
        );
    }
}

ReadLessComponent.contextType = ShowReadMoreContext

export default ReadLessComponent