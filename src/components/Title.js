import { Component } from 'react';

class Title extends Component {
    render(){
      return (
        <h2>
            {this.props.main}
        </h2>
      );
    }
}

export default Title;