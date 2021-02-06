import React from "react";
import Hello from "./hello";
import Tweet from "./tweet";
import Kustate from "./showstate";
import Helloworld from './klass'
import Hookexample from './hook'
import './App.css'

function App(){
  return(
    <div>
      <h1>This is the app component </h1>
      <Hello name ='magucha'/>
      <button>build</button>
      <Tweet name ='sammy' />
      <Kustate />
      <Helloworld />
      <Hookexample />
    </div>
  );
}
export default App;
