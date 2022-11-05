import React from 'react';

import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

function App() {
  let name = "홍길동";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "green",
    },

  };

  const number = 5;


  return (

    // <React.Fragment>
    //<>
    <div className="App" style={style.App}>
      <MyHeader />
      <header className="App-header">
        <h2 style={style.h2}>안녕 리액트 {name}</h2>
        <b>
          {number} 는 {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
      </header>
    </div>
    //</>
    // </React.Fragment> 

  );
}

export default App;
