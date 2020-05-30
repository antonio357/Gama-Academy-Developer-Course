import React, { useState } from 'react';
import axios from 'axios'

// class is a key word in js, so tags uses className now
function App(props) { // props means properties from a component
  const [user, setUser] = useState('')

  function handleRequest() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => console.log(response.data)).catch(err => console.log(err))
  }

  return ( 
    // JSX
    // {} means that you are including js code at the jsx
    // fragment it is necessary cause the jsx that is return needs to one thing 
    <> 
      <h1> {props.title} </h1>
      <p> {user} </p>
      <input className="gitUserInput" placeholder="type in here" value={user} onChange={e => setUser(e.target.value)} />
      <button type="button" onClick={handleRequest}> Search </button>
    </> 
    // fragment it is necessary cause the jsx that is return needs to one thing 
    // JSX
  );
}

export default App;
