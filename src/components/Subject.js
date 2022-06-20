import { Component } from 'react';

class Subject extends Component {
  render(){
    return (
      //안에 html 코드
      <div>
        <h1><a onClick={function(e){// 첫 번째 매개변수인 e는 event 객체
          e.preventDefault();// 이벤트가 발생한 태그가 기본적인 동작을 못하게 막음
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        <h3>{this.props.sub}</h3>
      </div>// 태그로 감싸야 함
    );
  }
}

export default Subject;