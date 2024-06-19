import styled from "styled-components";
import Box from "./Box";
import { FrontEnd } from "./FrontEmd";
import { BackEnd } from "./BackEnd";
import { Version } from "./Version";

const MiddleBox = () => {
    return(
        <Container>
            <Box>
                <FrontEnd/>
            </Box>
            <Box>
                <BackEnd />
            </Box>
            <Box>
                <Version />
            </Box>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5%;
    gap: 6em;
`;
export default MiddleBox;