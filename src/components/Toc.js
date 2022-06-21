import { Component } from 'react';

class Toc extends Component {
    shouldComponentUpdate(newProps, newState){// render 이전에 실행됨 / 2개의 매개변수를 가짐 / 바뀐 props와 state값
      if (this.props.data === newProps.data){
        return false;
      }
      return true;// true면 render 호출 /  false면 render는 호출되지 않음
    }
    render(){
      var lists = [];
      var list = this.props.data;
      var i = 0;
      while (i < list.length){
        lists.push(<p key={i}><a href={list[i].link}>{list[i].link}</a></p>);
        i = i + 1;
      }
      return (
        <nav>
            {lists}
        </nav>
      );
    }
}

export default Toc;// Toc라는 클래스를 외부에서 가져다 사용할 수 있게 됨