import React, { Component } from 'react';
import CreateContent from "./components/CreateContent";
import TOC from './components/TOC';
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import UpdateContent from "./components/UpdateContent"
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 2
    this.state= {
      mode:'welcome',
      selected_content_id:1,
      subject:{title:'하이 h i', sub:'우린 매드 몬스터',  photo:"data:image/jpeg;base64,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"},
      welcome:{title:'MAD ENTERTAINMENT'},
      contents:[
      {id:1, title:'탄', photo:"//w.namu.la/s/5508a6864f0f6393ced09ff8f74ecdf00623136dd00530683802a66a4c855b4007504e854522453a70daeeba6be7c5b81236cef3debe1ea20d0697a8c40dc8f35ecec30d8268aee020ee427dd1e94fbff312eaff14e0cb6dd2c53551eed06f0e0fe653678e5d60a24170488c71133d1c" },
      {id:2, title:'제이호', photo: "//w.namu.la/s/f28395c94457d660b44b8312b79d19a8e24996e3a92f2c2cd713661282a27d923b68bb294a047ecfdba40c7e6b2cb73af3fcdab51dada50545174423bd48b1b4720150e0a07a20b5a42d646afefd7cf5a8e30a4089d8389aa9b1c2991bd77a2d"}
      ]
    }
  }
  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
          break;
        }
        i = i + 1;
      }
  }
  getContent(){
    var _title, _photo, _article = null;
    if(this.state.mode ===  'welcome'){
      _title = this.state.welcome.title;
      _photo = this.state.welcome.photo;
      _article = <ReadContent title={_title}  photo={_photo}></ReadContent>
    } 
    
    else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} photo={_content.photo}></ReadContent>
    } 
    
    else  if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _photo){
        this.max_content_id = this.max_content_id + 1;
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, photo:_photo});
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>
    } 
    
    else  if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _photo){
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, photo:_photo};
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents:_contents,
            mode:'read'
          });
        }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
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
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,2);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted!');
            }
          } else {
            this.setState({
              mode:_mode
            });
          }
          
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
   }
  }


export default App;