import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return(
        <header>
          <h1><a href="/" onClick= { function(e){
            e.preventdefault();
            this.props.onChangePage();
          }}>{this.props.title}</a></h1>
          <img src={this.props.photo}></img>
          <h2>{this.props.sub}</h2>
        </header>
  
      );
    }
  }

export default Subject;