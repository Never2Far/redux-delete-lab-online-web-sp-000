import React, { Component } from 'react';


class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.band.id)
  }
  

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li><button onClick={this.handleOnClick}>DELETE</button>
      </div>
    );
  }
};

export default Band;


// import React from 'react'

// const Band = props => {
//     return (
//         <div>
//            <li>{props.band.name}</li><button onClick={() => props.deleteBand(props.band.id)}>DELETE</button>
//       </div>
//     )
// }
// export default Band;