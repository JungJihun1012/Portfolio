import styled from "styled-components"
import { HeaderText } from "./HeaderText";
import MiddleBox from "./MiddleBox";

export const Skill = () => {
    return(
        <Container>
            <HeaderText />
            <MiddleBox />
        </Container>
    )
}

export const Container = styled.div`
    height: 80vh;
    background-color: #f7b647;
`;