import styled from "styled-components"

export const GithubAddress = () => {
    return (
        <Container>
            <Address>
                github.com/JungJihun1012
            </Address>
        </Container>
    )
}

export const Container = styled.div`
    padding-top: 10px;
    width: 90%;
    margin: 0 auto;
`;
export const Address = styled.a`
    text-decoration: none;
    color: #258ddb;
`;