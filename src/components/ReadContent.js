import { Component } from 'react';

class ReadContent extends Component {// type에 맞는 이미지 보여주기
  render(){
    var img = null;
    var type = this.props.type;
    if (type === 'bw'){
      img = 'image/batman_logo.png';
    }else if (type === 'jb'){
      img = 'image/hush_jason.jpg';
    }else if (type === 'sb'){
      img = 'image/superbat.jpg';
    }else if (type === 'hb'){
      img = 'image/halbat.jpg';
    }else if (type === 'none'){
      img = 'image/ppxkijVuL9FpJfbFGfhCHE-1024-80.jpg';
    }
    return (
      <article><img src={img} alt='batman' style={{width:'30%'}}></img></article>
    );
  }
}

export default ReadContent;