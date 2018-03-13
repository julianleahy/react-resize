import React, { Component } from 'react';
import './Resize.css'


class Resize extends Component {

  state = {
    width : 0,
    height : 0
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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