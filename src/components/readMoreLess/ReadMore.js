import React, { Component } from 'react'
import ShowReadMoreContext from '../../context/readMore';

class ReadMoreComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { readMoreState: true };

    this.toggleReadMoreState = this.toggleReadMoreState.bind(this)
  }

  toggleReadMoreState() {
    this.setState((prev) => ({ readMoreState: !prev.readMoreState }))
  }

  render() {
    return (
      <ShowReadMoreContext.Provider
        readMoreState={this.state.readMoreState}
        toggleReadMoreState={this.toggleReadMoreState}
      >
        <>
          {this.state.readMoreState && <span className='readMore' onClick={this.toggleReadMoreState}> Read More... </span>}
        </>
      </ShowReadMoreContext.Provider>
    );
  }
}

export default ReadMoreComponent