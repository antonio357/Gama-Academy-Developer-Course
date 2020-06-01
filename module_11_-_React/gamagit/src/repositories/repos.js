import React, { useEffect, useState } from "react";
import * as styled from "./styled";

export default function Repos() {
    const [repos, setRepos] = useState([]);
    const [reposLi, setReposLi] = useState();

    useEffect(() => {
        JSON.parse(localStorage.getItem("repos")).map((repo) => repos.push(repo))
        console.log("Repos -> repos", repos)
        setReposLi(repos.map(repo => {
            return <li> {repo.name} <a href={repo.link}> go to repository </a> </li>
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
            </styled.container>
        </>
    );
}
