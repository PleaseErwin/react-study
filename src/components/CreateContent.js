import { Component } from 'react';

class CreateContent extends Component {
  render(){// submit 버튼을 클릭하면 이 버튼을 포함하고 있는 form 태그의 onSubmit 이벤트 호출
    return (
      <article>
        <form action='/create_process' method='post'
        onSubmit={function(e){// 이벤트 객체 e의 target이라는 property가 form 자체를 가리킴
          e.preventDefault();// action이 가리키는 페이지로 이동되는 것을 방지
          this.props.onSubmit(e.target.couple.value, e.target.link.value);// App.js의 onSubmit 라는 props 호출
        }.bind(this)}>
          <p>
            <select name="couple">
              <option value="jb">Jason Todd</option>
              <option value="sb">Clark Kent</option>
              <option value="hb">Hal Jordan</option>
              <option value="none">None-couple</option>
            </select>
          </p>
          <p><input type='text' name='link' placeholder='Enter URL'></input></p>
          {/* <p><textarea name='link' placeholder='Enter URL'></textarea></p> */}
          <p><input type='submit' value='register'></input></p>
        </form>
      </article>
    );
  }
}

export default CreateContent;