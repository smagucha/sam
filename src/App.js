import React from "react";
import Hello from "./hello";
import Tweet from "./tweet";
import Kustate from "./showstate";

function App(){
  return(
    <div>
      <h1>This is the app component </h1>
      <Hello name ='magucha'/>
      <button>build</button>
      <Tweet name ='sammy' />
      <Tweet name ='nick'/>
      <Tweet name ='ben'/>
      <Kustate />
    </div>
  );
}
export default App;
