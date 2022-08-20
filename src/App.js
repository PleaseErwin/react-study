import './App.css';
import { Component } from 'react';// react라는 라이브러리에서 Component라는 클래스를 로딩
import Toc from './components/Toc'
import Title from './components/Title'
import Subject from './components/Subject'
import Control from './components/Control'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'

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
    var _sub, _article = null;

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

    if (this.state.mode === 'read'){
      _article = <ReadContent type={this.state.type}></ReadContent>;
    }else if (this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_couple, _link){
        if (_couple === 'jb'){// Array.from은 내용이 같을 뿐 완전히 다른 배열을 새로 만듦
          var new_jb_contents = Array.from(this.state.jb_contents);
          new_jb_contents.push({link:_link});
          this.setState({
            jb_contents:new_jb_contents
          });
        }else if (_couple === 'sb'){// concat은 push와 다르게 원본을 바꾸지 않음 - 새로운 배열 리턴
          var _sb_contents = this.state.sb_contents.concat({link:_link});
          this.setState({
            sb_contents:_sb_contents
          });
        }else if (_couple === 'hb'){
          var _hb_contents = this.state.hb_contents.concat({link:_link});
          this.setState({
            hb_contents:_hb_contents
          });
        }else if (_couple === 'none'){
          var _none_contents = this.state.none_contents.concat({link:_link});
          this.setState({
            none_contents:_none_contents
          });
        }
        this.setState({
          mode:'read'
        });
      }.bind(this)}></CreateContent>;
    }else if (this.state.mode === 'update'){
      _article = <UpdateContent sub={_sub} onSubmit={function(changed_sub){
        var new_subject = Object.assign({}, this.state.subject);
        if (this.state.type === 'bw'){
          new_subject.sub_bw = changed_sub;
        }else if (this.state.type === 'jb'){
          new_subject.sub_jb = changed_sub;
        }else if (this.state.type === 'sb'){
          new_subject.sub_sb = changed_sub;
        }else if (this.state.type === 'hb'){
          new_subject.sub_hb = changed_sub;
        }else if (this.state.type === 'none'){
          new_subject.sub_none = changed_sub;
        }
        this.setState({
          subject:new_subject,
          mode:'read'
        });
      }.bind(this)}></UpdateContent>
    }

    return (// 부모(App)의 state를 자식한테 전달할 때는 props를 통해서 전달
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={_sub}
          onChangePage={function(){
            this.setState({
              type:'bw',
              mode:'read'
            });
          }.bind(this)}>
        </Subject>
        {_article}
        <Control onChangeMode={function(_mode){// 핸들러
          if (_mode === 'delete'){// 현재 state의 mode가 delete인 것은 아님
            if (window.confirm('Do you really want to reset the title?')){// 사용자가 확인을 누르면 confirm은 true가 됨
              var new_subject = Object.assign({}, this.state.subject);
              if (this.state.type === 'bw'){
                new_subject.sub_bw = '';
              }else if (this.state.type === 'jb'){
                new_subject.sub_jb = '';
              }else if (this.state.type === 'sb'){
                new_subject.sub_sb = '';
              }else if (this.state.type === 'hb'){
                new_subject.sub_hb = '';
              }else if (this.state.type === 'none'){
                new_subject.sub_none = '';
              }
              this.setState({
                subject:new_subject,
              });
            }
          }else {
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}></Control>
        <br></br>
        <Title main={this.state.couple.jb}
        onChangePage={function(){// onChangePage라는 이벤트 / props의 형태로 함수 전달
          this.setState({
            type:'jb',
            mode:'read'
          });
        }.bind(this)}></Title>
        <Toc data={this.state.jb_contents}></Toc>
        <br></br>
        <Title main={this.state.couple.sb}
        onChangePage={function(){
          this.setState({
            type:'sb',
            mode:'read'
          });
        }.bind(this)}></Title>
        <Toc data={this.state.sb_contents}></Toc>
        <br></br>
        <Title main={this.state.couple.hb}
        onChangePage={function(){
          this.setState({
            type:'hb',
            mode:'read'
          });
        }.bind(this)}></Title>
        <Toc data={this.state.hb_contents}></Toc>
        <br></br>
        <Title main={this.state.couple.none}
        onChangePage={function(){
          this.setState({
            type:'none',
            mode:'read'
          });
        }.bind(this)}></Title>
        <Toc data={this.state.none_contents}></Toc>
        <br></br>
      </div>
    );
  }
}

export default App;