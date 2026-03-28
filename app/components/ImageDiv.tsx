import styled from 'styled-components';
import {Image} from "@/app/interfaces/image";

const ImageWrapper = styled.div`
    display: flex;
    margin: 1vh 1vw;
    border-radius: 5px;
    height: 10vh;
    width: 20vw;
`

export default function ImageDiv(props: Image) {
    return (
        <ImageWrapper>
            <img src={`url(${props.fileInfo.url})`} alt={`${props.altText}`}/>
        </ImageWrapper>
    )
}
