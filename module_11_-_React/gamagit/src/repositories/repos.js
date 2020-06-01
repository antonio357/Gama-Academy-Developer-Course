import React, { useEffect, useState } from "react";
import * as styled from "./styled";
import {useHistory} from "react-router-dom"

export default function Repos() {
    const history = useHistory()
    const [repos, setRepos] = useState([]);
    const [reposLi, setReposLi] = useState();

    useEffect(() => {
        let localRequest = localStorage.getItem("repos") 
        if (!localRequest) {
            history.push("/")
            return
        }
        JSON.parse(localRequest).map((repo) => repos.push(repo))
        console.log("Repos -> repos", repos)
        setReposLi(repos.map(repo => {
            return <li key={repo.name}> {repo.name} <a href={repo.link}> go to repository </a> </li>
        }))
        localStorage.clear();
    }, []);

    return (
        <>
            <styled.container>
                <h1> Repositories </h1>
                <ul>
                    {reposLi}
                </ul>
                <styled.link to="/"> return </styled.link>
            </styled.container>
        </>
    );
}
