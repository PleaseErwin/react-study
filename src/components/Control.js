import { Component } from 'react';

class Control extends Component {
  render(){
    return (
      <dir>
        <a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode();
          }.bind(this)}>create </a> 
        <a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode();
          }.bind(this)}>update </a> 
        <input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode();
          }.bind(this)}></input>
      </dir>
    );
  }
}

export default Control;