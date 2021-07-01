import React, { Component } from 'react';

class Control extends Component {
    render() {
      return(
        <ul>
           <li><a href = "/create" onClick={function(e){
             e.preventDefault();
             this.props.onChangeMode('create')
           }.bind(this)}>Add member</a></li>
           
         </ul>
      );
    }
  }

export default Control;