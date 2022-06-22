import { Component } from 'react';

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state={
      subtext:this.props.sub
    }
  }
  render(){
    return (
      <article>
        <form action='/update_process' method='post'
        onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(this.state.subtext);
        }.bind(this)}>
          <p><input type='text' name='sub' placeholder=''
          value={this.state.subtext}
          onChange={function(e){
            this.setState({
              subtext:e.target.value
            });
          }.bind(this)}></input></p>
          <p><input type='submit' value='register'></input></p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;