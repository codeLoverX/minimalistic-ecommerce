import React, { Component } from 'react'
import ShowReadMoreContext from '../../context/readMore';

class ReadLessComponent extends Component {
    constructor(props) {
        super(props);
    }

    toggleReadMore() {
        this.setState((prev) => ({ showButton: !prev.showButton }))
    }

    render() {
        return (
            <ShowReadMoreContext.Provider>
                {({readMoreState, toggleReadMoreState}) => (
                    <> 
                    {this.props.readMoreValues}
                    { readMoreState &&  <span className='readMore' onClick={this.toggleReadMoreState}> Read Less.. </span> }
                     </>
                )

                }
                {/* <span className='readMore' onClick={this.toggleReadMore}> Show More... </span> */}
            </ShowReadMoreContext.Provider>
        );
    }
}

export default ReadLessComponent