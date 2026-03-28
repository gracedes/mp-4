"use client";

import styled from "styled-components";
import {useState} from "react";
import useSWR from "swr";
import Link from "next/link";
import {useParams} from "next/navigation";
import {Image} from "@/app/interfaces/image";
import ImageDiv from "@/app/components/ImageDiv";

const StyledMain = styled.main`
    height: 95vh;
    width: 100%;
    margin: 0 auto;
    #search {
        display: flex;
        flex-direction: row;
        & label {
            display: flex;
            flex-direction: row;
        }
    }
`;

export default function Results() {
    const params = useParams();
    const [search, setSearch] = useState(`${params.search}`);
    const [limit, setLimit] = useState<number>(25);
    const [start, setStart] = useState<number>(0);

    const {data, error} = useSWR(`/api/getImage?limit=${limit}&start=${start}&query=${encodeURIComponent(search)}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    if (error) return (<StyledMain>
        <div id="search">
            <input onChange={e => setSearch(e.target.value)} placeholder="Search..." type="text" aria-label="Search" id="searchBox" value={search}/>
            <label htmlFor="limit">
                <input onChange={e => setLimit(Number(e.target.value))}  type="number" id="limit" value={limit}/>
                <p>items per search</p>
            </label>
        </div>
        <div>Failed to load</div>
        <p> meow </p>
    </StyledMain>);
    if (!data) return (<StyledMain>
        <div id="search">
            <input onChange={e => setSearch(e.target.value)} placeholder="Search..." type="text" aria-label="Search" id="searchBox" value={search}/>
            <label htmlFor="limit">
                <input onChange={e => setLimit(Number(e.target.value))}  type="number" id="limit" value={limit}/>
                <p>items per search</p>
            </label>
        </div>
        <div>Loading...</div>
    </StyledMain>);

    const imgData = data?.data || [];

    return (
        <StyledMain>
            <div id="search">
                <input onChange={e => setSearch(e.target.value)} placeholder="Search..." type="text" aria-label="Search" id="searchBox" value={search}/>
                <label htmlFor="limit">
                    <input onChange={e => setLimit(Number(e.target.value))} type="number" id="limit" value={limit}/>
                    <p>items per search</p>
                </label>
            </div>
            <Link href={`/${encodeURIComponent(search)}`}>Search</Link>
            <div>
                {
                    imgData.map((image: Image, i: number) =>
                        (<ImageDiv fileInfo={image.fileInfo} altText={image.altText} key={i}/>)
                    )
                }
            </div>
        </StyledMain>
    );
}