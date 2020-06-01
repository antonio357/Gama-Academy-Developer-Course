import React, { useState } from 'react';
import axios from 'axios' // deals with http requests
import {useHistory} from "react-router-dom"

import * as styled from "./styled"

// class is a key word in js, so tags uses className now
function Home() { // props means properties from a component
  const history = useHistory();
  const [user, setUser] = useState('')

  function handleRequest() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
    console.log("handleRequest -> response", response)
      let repos = []
      response.data.map((repo) => {
        repos.push({name: repo.name, link: repo.html_url})
      })
      localStorage.setItem("repos", JSON.stringify(repos))
      history.push("/repos")
    }).catch(err => {
      console.error(err)
      window.alert(`github didn't find user with name "${user}"`)
    })
  }

  return ( 
    // JSX
    // {} means that you are including js code at the jsx
    // fragment it is necessary cause the jsx that is return needs to one thing 
    <> 
      <styled.container>
        <div>
          <input placeholder="github user name" value={user} onChange={e => setUser(e.target.value)} />
        </div>
        <div>
          <button type="button" onClick={handleRequest}> Search </button>
        </div>
      </styled.container>
    </> 
    // fragment it is necessary cause the jsx that is return needs to one thing 
    // JSX
  );
}

export default Home;