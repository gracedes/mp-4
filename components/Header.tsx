import styled from "styled-components";

const HeaderBlock = styled.header`
    background-color: #00000099;
    backdrop-filter: blur(5px);
    color: white;
    height: 5vh;
    padding: 0 1rem;
`;
export default function Header() {
    return (
        <HeaderBlock>
            <h1>NPS Gallery</h1>
        </HeaderBlock>
    )
}