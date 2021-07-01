import React, { Component } from 'react';

class ReadContent extends Component{
    render(){
      return(
        <article>
          <h2>{this.props.title}</h2>
          <img src = {this.props.photo} width="30%" ></img>
        </article>
      );
    }
}

export default ReadContent;