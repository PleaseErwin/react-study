import './App.css';
import { Component } from 'react';// react라는 라이브러리에서 Component라는 클래스를 로딩
import Toc from './components/Toc'
import Title from './components/Title'
import Subject from './components/Subject'
import Control from './components/Control'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'

class App extends Component {
  constructor(props){// render라는 함수보다 먼저 실행이 되면서 컴포넌트 초기화 담당
    super(props);
    this.state = {// state값 초기화 / 컴포넌트가 일단 생성이 된 다음에는 state의 값을 수정하려면 setState 이용
      mode:'read',
      type:'bw',
      subject:{title:'Bat-fanfictions on Archive of Our Own', 
      sub_bw:'with Bruce Wayne', 
      sub_jb:'He took me away from you', 
      sub_sb:'', 
      sub_hb:'Who the hell\'s Bruce Wayne?', 
      sub_none:''},
      couple:{sb:'Clark Kent & Bruce Wayne', hb:'Hal Jordan & Bruce Wayne', jb:'Jason Todd & Bruce Wayne', none:'None-couple'},
      jb_contents:[// 예시에는 객체마다 id값을 줬음
        {link:'https://archiveofourown.org/works/35657686'},
        {link:'https://archiveofourown.org/works/27338314/chapters/66795883'},
        {link:'https://archiveofourown.org/works/20480720/chapters/48598514'}
      ],
      sb_contents:[//예시에 있는 id는 내가 뺌
        {link:'https://archiveofourown.org/works/13839903'}, 
        {link:'https://archiveofourown.org/works/36037564'},
        {link:'https://archiveofourown.org/works/11484096'},
        {link:'https://archiveofourown.org/works/11485518/chapters/25760694'},
        {link:'https://archiveofourown.org/works/13593723/chapters/31204365'},
        {link:'https://archiveofourown.org/works/12304110/chapters/27970914'},
        {link:'https://archiveofourown.org/works/12639630/chapters/28801764'},
        {link:'https://archiveofourown.org/works/33976105'},
        {link:'https://archiveofourown.org/works/193575'},
        {link:'https://archiveofourown.org/works/11943072'},
        {link:'https://archiveofourown.org/works/12568920/chapters/28628100'},
        {link:'https://archiveofourown.org/works/20911811'},
        {link:'https://archiveofourown.org/works/301669/chapters/482974'},
        {link:'https://archiveofourown.org/works/6667840'},
        {link:'https://archiveofourown.org/works/125504'}
      ],
      hb_contents:[
        {link:'https://archiveofourown.org/works/25688722'},
        {link:'https://archiveofourown.org/works/29981898'},
        {link:'https://archiveofourown.org/works/31380614'},
        {link:'https://archiveofourown.org/works/4787114'}
      ],
      none_contents:[
        {link:'https://archiveofourown.org/works/19031956'},
        {link:'https://archiveofourown.org/works/27282331/chapters/66655615'},
        {link:'https://archiveofourown.org/works/17673104'},
        {link:'https://archiveofourown.org/works/12264420'},
        {link:'https://archiveofourown.org/works/12451170'},
        {link:'https://archiveofourown.org/works/18942745'},
        {link:'https://archiveofourown.org/works/9198536'},
        {link:'https://archiveofourown.org/works/10667829'},
        {link:'https://archiveofourown.org/works/21421639'},
        {link:'https://archiveofourown.org/works/23586910'},
        {link:'https://archiveofourown.org/works/11754783'},
        {link:'https://archiveofourown.org/works/20177044'},
        {link:'https://archiveofourown.org/works/13193916'},
        {link:'https://archiveofourown.org/works/18178256'}
      ]
    }
  }
  render() {// state가 바뀌면 render 함수가 다시 호출됨 - 하위 컴포넌트들의 render함수 또한 재호출 > 화면이 다시 그려짐
    var _sub = null;
    if (this.state.type === 'bw'){
      _sub = this.state.subject.sub_bw;
    }else if (this.state.type === 'jb'){
      _sub = this.state.subject.sub_jb;
    }else if (this.state.type === 'sb'){
      _sub = this.state.subject.sub_sb;
    }else if (this.state.type === 'hb'){
      _sub = this.state.subject.sub_hb;
    }else if (this.state.type === 'none'){
      _sub = this.state.subject.sub_none;
    }
    return (// 부모(App)의 state를 자식한테 전달할 때는 props를 통해서 전달
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={_sub}
          onChangePage={function(){
            this.setState({
              type:'bw'
            });
          }.bind(this)}>
        </Subject>
        <ReadContent></ReadContent>
        <Control onChangeMode={function(mode){// 핸들러
          this.setState({
            mode:mode
          });
        }.bind(this)}></Control>
        <br></br>
        <Title main={this.state.couple.jb}
        onChangePage={function(){// onChangePage라는 이벤트 / props의 형태로 함수 전달
          this.setState({
            type:'jb'
          });
        }.bind(this)}></Title>
        <Toc data={this.state.jb_contents}></Toc>
        <br></br>
        <Title main={this.state.couple.sb}
        onChangePage={function(){
          this.setState({
            type:'sb'
          });
        }.bind(this)}></Title>
        <Toc data={this.state.sb_contents}></Toc>
        <br></br>
        <Title main={this.state.couple.hb}
        onChangePage={function(){
          this.setState({
            type:'hb'
          });
        }.bind(this)}></Title>
        <Toc data={this.state.hb_contents}></Toc>
        <br></br>
        <Title main={this.state.couple.none}
        onChangePage={function(){
          this.setState({
            type:'none'
          });
        }.bind(this)}></Title>
        <Toc data={this.state.none_contents}></Toc>
        <br></br>
      </div>
    );
  }
}

export default App;