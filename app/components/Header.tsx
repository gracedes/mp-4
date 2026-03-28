import styled from "styled-components";

const HeaderBlock = styled.header`
    width: 100%;
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