import { Component } from 'react';

class UpdateContent extends Component {
  render(){
    return (
      <article>
        <form action='/update_process' method='post'
        onSubmit={function(e){
          e.preventDefault();
          // this.props.onSubmit(e.target.couple.value, e.target.link.value);
        }.bind(this)}>
          <p><input type='text' name='sub' placeholder=''
          value={this.props.sub}></input></p>
          <p><input type='submit' value='register'></input></p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;