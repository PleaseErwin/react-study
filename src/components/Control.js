import { Component } from 'react';

class Control extends Component {
  render(){
    return (
      <div>
        <input type="button" value="create" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
          }.bind(this)}></input>
        <input type="button" value="update" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('update');
          }.bind(this)}></input>
        <input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}></input>
        <input type="button" value="cancel" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('read');
          }.bind(this)}></input>
      </div>
    );
  }
}

export default Control;