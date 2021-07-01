import React, { Component } from 'react';
import CreateContent from "./components/CreateContent";
import TOC from './components/TOC';
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 1
    this.state= {
      mode:'welcome',
      subject:{title:'하이 h i', sub:'우린 매드 몬스터',  photo:"//file.namu.moe/file/1e6af05025f45ece767276cfce4500b1da951b855d1cf525369b39994ecfc18551b61452cab09932b9abf9ccf426020d"},
      welcome:{title:'MAD ENTERTAINMENT'},
      contents:[
      {id:1, title:'탄', photo:"//w.namu.la/s/5508a6864f0f6393ced09ff8f74ecdf00623136dd00530683802a66a4c855b4007504e854522453a70daeeba6be7c5b81236cef3debe1ea20d0697a8c40dc8f35ecec30d8268aee020ee427dd1e94fbff312eaff14e0cb6dd2c53551eed06f0e0fe653678e5d60a24170488c71133d1c" },
      ]
    }
  }
  render() {
    var _title, _photo, _article = null;
    if(this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _photo = this.state.welcome.photo;
        _article = <ReadContent title={_title} photo={_photo}></ReadContent>
    }
    else if (this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id ){
          _title = data.title;
          _photo = data.photo;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title}  photo={_photo}></ReadContent>
    } else if(this.state.mode ==='create'){
      _article = <CreateContent onSubmit ={function(_title, _photo){
        this.max_content_id = this.max_content_id + 1;
        var newContents = Array.from(this.state.contents);
        newContents.push(
          {id : this.max_content_id, title: _title, photo: _photo}
        );
        this.setState({
          contents: newContents
        });
      }.bind(this)}></CreateContent>
    }
    return(
      <div className="App">
         <Subject 
         title = {this.state.subject.title} 
         sub = {this.state.subject.sub}
         photo = {this.state.subject.photo}
         onChangePage = {function(){
           this.setstate({mode:'welcome'});
         }.bind(this)}
         ></Subject>
         <TOC 
         onChangePage={function(id){
           this.setState({
             mode:'read',
             selected_content_id:Number(id)
          });
         }.bind(this)} 
         data = {this.state.contents}></TOC>
         <Control onChangeMode={function(_mode){
           this.setState({
             mode: _mode
           })
         }.bind(this)}></Control>
         {_article}
         
      </div>
    )
  }
}


export default App;
