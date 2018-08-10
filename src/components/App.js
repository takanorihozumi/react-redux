import React, {Component} from 'react';

const App = ()=> (<Counter></Counter>)

class Counter extends Component {
  //初期化処理（instance作成時に呼ばれる）
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count:0,hoz:"hoz"}
  }
  handlePlusButton = () =>{
    //state設定用のでファクタスタンダード(stateを直接いじってはだめ)
    //状態を変えて、DOMも再度renderしたいため。setStateではrenderも実行されてる
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton =()=>{
    this.setState({count:this.state.count -1})
  }
  render(){
    console.log("render実行")

    return (
      <React.Fragment>
        <div id="test">count: { this.state.count},{this.state.hoz }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}
//stateはclassコンポーネントの内部で利用するもの
//propsはimmutableな値
//stateはmutableで親から子に値を渡す


export default App;
