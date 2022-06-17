import { Component } from 'react';

class Subject extends Component {
  render(){
    return (
      //안에 html 코드
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.sub}</h3>
      </div>// 태그로 감싸야 함
    );
  }
}

export default Subject;