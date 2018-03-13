import React, { Component } from 'react';
import './Resize.css'


class Resize extends Component {

  state = {
    width : 0,
    height : 0
  }

  render() {
    return(
      <div className='ResizeDisplay'>
        {this.state.width} : {this.state.height}
      </div>
    );
  }
}

export default Resize;