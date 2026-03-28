import React from "react";
import Header from "@/app/components/Header"
import styled from "styled-components";
import "./globals.css";

const ImgBackground = styled.div/*<{imgURL: string}>*/`
        width: 100vw;
        height: fit-content;
        background-image: url("https://www.nps.gov/npgallery/GetAsset/f853fe55-155d-451f-67c5-999b8a664d78/proxy/hires?");
        background-size: cover;
        margin: 0;
        padding: 0;
    `;

const Wrapper = styled.div`
    width: 70vw;
    height: fit-content;
    margin: 0 auto;
    padding: 0;
    background-color: #000000aa;
    backdrop-filter: blur(5px);
    color: white;
`

export default function RootLayout(
    {children,}:
        Readonly<{children: React.ReactNode;}>
){
    //const {data, error} = useSWR(`/api/getImage?limit=1&start=${Math.random() * (Math.floor(97075) - Math.ceil(0)) }`,
    //    (url) =>
    //        fetch(url)
    //            .then((res) => res.json())
    //);

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>NPS Gallery</title>
            </head>
            <body>
                <ImgBackground /*imgURL={data.data.fileInfo.url}*/>
                    <Wrapper>
                        <Header/>
                        {children}
                    </Wrapper>
                </ImgBackground>
            </body>
        </html>
    );
}
