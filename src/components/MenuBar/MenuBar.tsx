import styled from "styled-components"
import { ProtFolio } from "./Protfolio";
import { Introduction } from "./Introduction";


export const MenuBar = () => {
    return(
        <Container>
            <ProtFolio />
            <Introduction />
        </Container>
    )
}

export const Container = styled.div`
    width: 55%;
    line-height: 4.5em;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
`;