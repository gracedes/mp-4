import React from "react";
import Header from "@/components/Header"
import styled from "styled-components";
import "./globals.css";
import useSWR from "swr";

const ImgBackground = styled.div/*<{imgURL: string}>*/`
        width: 100vw;
        height: fit-content;
        background-image: url("/tempbackground.jpg");
        background-size: cover;
        margin: 0;
        padding: 0;
    `;

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
                    <Header/>
                    {children}
                </ImgBackground>
            </body>
        </html>
    );
}
