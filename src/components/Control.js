import React, { Component } from 'react';

class Control extends Component {
    render() {
      return(
        <ul>
           <h2><a href = "/create" onClick={function(e){
             e.preventDefault();
             this.props.onChangeMode('create')
           }.bind(this)}>Add member</a></h2>
           <h2><a href = "/update" onClick={function(e){
             e.preventDefault();
             this.props.onChangeMode('update')
           }.bind(this)}> update</a></h2>
           <h2><a href = "/delete" onClick={function(e){
             e.preventDefault();
             this.props.onChangeMode('delete')
           }.bind(this)}>delete</a></h2>
         </ul>
      );
    }
  }

export default Control;