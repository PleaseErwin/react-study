import { Component } from 'react';

class Toc extends Component {
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