import styled from 'styled-components';
import {ResponseElement} from "@/app/interfaces/ResponseElement";
import Image from "next/image";

const ImageWrapper = styled.div`
    margin: 0;
    width: 14vw;
    height: 18vh;
    padding: auto auto;
    display: flex;
`;

export default function ImageDiv(props: ResponseElement) {
    return (
        <ImageWrapper>
            <Image src={`${props.fileInfo.url}`} alt={`${props.altText}`} height={150} width={150} style={{objectFit: "contain", margin: "auto"}}/>
        </ImageWrapper>
    )
}
