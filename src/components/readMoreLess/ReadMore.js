import React, { Component } from 'react'
import { ShowReadMoreContext } from '../../context/readMore';

class ReadMoreComponent extends Component {
  render() {
    return (
      <ShowReadMoreContext.Consumer>
        {({ readMoreState, toggleReadMoreState }) => (
          <>
            {this.props.children}
            {readMoreState===true && <span className='readMore' onClick={toggleReadMoreState}> Read More... </span>}
          </>
        )
        }
      </ShowReadMoreContext.Consumer >

    )
  }
}

export default ReadMoreComponent