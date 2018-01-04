import React, { Component } from 'react';


class MemeItem extends Component{
  constructor(){
      super();

      this.state = {
        hovered: false
      }
  }

    render(){
      return (
        <div
          className="meme-item"
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
        >
          <img
          src={this.props.meme.url}
          alt={this.props.meme.name}
          className="meme-img"/>
          <p className="meme-txt">
            {this.props.meme.name}
          </p>
        </div>
      )
    }
}

export default MemeItem;
