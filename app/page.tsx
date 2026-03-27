import styled from "styled-components";

const StyledMain = styled.main`
    background-color: #00000099;
    backdrop-filter: blur(5px);
    color: white;
    height: 95vh;
    width: 60vw;
    margin: 0 auto;
`;

export default function Home() {
    return (
        <StyledMain>
            <p> meow </p>
        </StyledMain>
    );
}