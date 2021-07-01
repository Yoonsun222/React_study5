import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      return(
        <article>
          <h2>Who's next member?</h2>
          <form action ="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.photo.value
              );
            }.bind(this)}
          >
            <p><input type ="text" name="title" placeholder ="name"></input></p>
            <p>
              <textarea name = "photo" placeholder ="url"></textarea>
            </p>
            <p>
              <input type ="submit" value="제출"></input>
            </p>
          </form>
        </article>
      );
    }
}

export default CreateContent;