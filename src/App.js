import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting ="Hi";
    //jsx ではclassではなくclassNameとかく（jsの予約語とかぶるから）
    // const dom = <h1 className="">{greeting}</h1>;
    return (
      //reactは一つのタグで囲う必要がある（余計なdivを表示したくない場合にReact.Fragmentde
      ）
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={()=> {console.log("ho")}} />
      </React.Fragment>

    );
  }
}

export default App;
