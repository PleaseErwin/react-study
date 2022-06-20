import { Component } from 'react';

class Title extends Component {
    render(){
      return (
        <h2>
          <a onClick={function(e){
            e.preventDefault();// 링크를 클릭했을 때 페이지 변경 방지
            this.props.onChangePage();// 함수 실행
          }.bind(this)}>
            {this.props.main}
          </a>
        </h2>
      );
    }
}

export default Title;