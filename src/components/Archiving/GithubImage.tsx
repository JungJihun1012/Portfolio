import styled from "styled-components"

export const GithubImage = () => {
    return(
        <Container>
            <Image />
            <Github>
                GitHub
            </Github>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 20px;
    width: 90%;
    margin: 0 auto;
`;
export const Github = styled.div`
    font-size: 40px;
    font-weight: bold;
`;
export const Image = styled.div`
    background-image: url("Images/Github.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 80px;
    height: 90px;
`;