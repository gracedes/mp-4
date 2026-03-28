"use client";

import styled from "styled-components";
import {useState} from "react";
import useSWR from "swr";
import Link from "next/link";
import {useParams} from "next/navigation";
import {ResponseElement} from "@/app/interfaces/ResponseElement";
import ImageDiv from "@/app/components/ImageDiv";

const StyledMain = styled.main`
    height: fit-content;
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

const ImageDivWrapper = styled.div`
    display: grid;
    grid-template: 18vh 18vh 18vh 18vh 18vh / 14vw 14vw 14vw 14vw 14vw;
    width: 70vw;
    height: fit-content;
    margin: 1vh 0 0 0;
`;

export default function Results() {
    const params = useParams();
    const [search, setSearch] = useState(`${params.search}`);
    const [limit, setLimit] = useState<number>(25);
    const [index, setIndex] = useState<number>(0);

    const {data, error} = useSWR(`/api/getImage?limit=${limit}&start=${index}&query=${encodeURIComponent(search)}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    if (error) return (<StyledMain>
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
        <div>Failed to load</div>
    </StyledMain>);
    if (!data) return (<StyledMain>
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
        <div>Loading...</div>
    </StyledMain>);

    const imgData = data?.data || [];

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
            <ImageDivWrapper>
                {
                    imgData.map((image: ResponseElement, i: number) =>
                        (<ImageDiv fileInfo={image.fileInfo} altText={image.altText} key={i}/>)
                    )
                }
            </ImageDivWrapper>
        </StyledMain>
    );
}