import { Component } from 'react';

class Title extends Component {
    render(){
      return (
        <h2>
          <a onClick={function(e){
            e.preventDefault();
            this.setState({
              mode:mode
            });
          }.bind(this)}>
            {this.props.main}
          </a>
        </h2>
      );
    }
}

export default Title;