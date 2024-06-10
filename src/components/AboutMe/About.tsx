import styled from "styled-components"

export const About = () => {

    const location = document.querySelector("#About").offsetTop;

    return(
        <Container>
            <Aboutme id="About">
                ABOUT ME
            </Aboutme>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;
export const Aboutme = styled.div`
    padding-top: 50px;
    padding-bottom: 6px;
    font-size: 40px;
    font-weight: bold;
    border-bottom: 1px solid lightgray;
    font-family: "BlackHan";
`;