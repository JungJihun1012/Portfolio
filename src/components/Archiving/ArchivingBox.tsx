import styled from "styled-components"
import { GithubImage } from "./GithubImage";

export const ArchivingBox = () => {
    return(
        <Container>
            <Box>
                <GithubImage />
            </Box>
        </Container>
    )
}

export const Container = styled.div`
    padding-top: 60px;
`;
export const Box = styled.div`
    width: 500px;
    height: 33vh;
    background-color: #eee; 
    border-radius: 20px;
    margin: 0 auto;
    box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, .2);
    -webkit-box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, .2);
    &:hover {
        transform: translateY(10px);
        transition: .5s;
    }
`;