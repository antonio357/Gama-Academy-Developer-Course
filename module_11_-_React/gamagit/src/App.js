import React, { useState } from 'react';

// class is a key word in js, so tags uses className now
function App(props) { // props means properties from a component
  // const [user, userSet] = useState("Antonio")
  return ( 
    // JSX
    // {} means that you are including js code at the jsx
    // fragment it is necessary cause the jsx that is return needs to one thing 
    <> 
      <h1> {props.title} </h1>
      {/* <p> {user} </p> */}
      <input name="user" id="userInput" className="gitUserInput" placeholder="type in here"/>
    </> 
    // fragment it is necessary cause the jsx that is return needs to one thing 
    // JSX
  );
}

export default App;
