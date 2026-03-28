"use client";

import styled from "styled-components";
import {useState} from "react";
import useSWR from "swr";
import Link from "next/link";

const StyledMain = styled.main`
    height: 95vh;
    width: 100%;
    margin: 0 auto;
    .hbox {
        display: flex;
        flex-direction: row;
    }
    .vbox {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        .searchButton {
            background-color: white;
            border-radius: 5px;
            color: black;
            text-decoration: none;
            width: fit-content;
            padding: 2px;
            margin: 3px auto 0 auto;
        }
    }
`;

export default function Home() {
    const [search, setSearch] = useState("");
    const [limit, setLimit] = useState<number>(25);
    const [index, setIndex] = useState<number>(0);
    return (
        <StyledMain>
            <div className="hbox">
                <div className="vbox">
                    <input onChange={e => setSearch(e.target.value)} placeholder="Search..." type="text" aria-label="Search" id="searchBox" value={search}/>
                    <Link className={"searchButton"} href={`/${encodeURIComponent(search)}`}>Search</Link>
                </div>
                <div className="vbox">
                    <label htmlFor="limit">
                        <input onChange={e => setLimit(Number(e.target.value))} type="number" id="limit" value={limit}/>
                        <p>items per search</p>
                    </label>
                </div>
                <div className="vbox">
                    <div className="vbox">
                        <label htmlFor="index">
                            <input onChange={e => setIndex(Number(e.target.value))} type="number" id="index" value={index}/>
                            <p>starting index</p>
                        </label>
                    </div>
                </div>
            </div>
        </StyledMain>
    );
}