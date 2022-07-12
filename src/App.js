import React, { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const myElement = <h1>I Love JSX!</h1>;
  const tabela = <h2>{count}</h2>
  const button = <button onClick={() => setCount(count+1)}>Cresce um</button>

  return (
    <div id="caixa">
      <div className="box">
        {myElement}
        {tabela}
        {button}
      </div>
    </div>
   
  );
}

export default App;
