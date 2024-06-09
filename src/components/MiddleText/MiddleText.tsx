import styled from "styled-components"
import { MyName } from "./MyName";
import { ExampleText } from "./ExampleText";
import { Learn } from "./Learn";

const hrStyle = {
    height: "3px",
    width: "60px",
    backgroundColor: "#06a8f9",
    fontWeight: "bold"
}

export const MiddleText = () => {
    return(
        <Container>
            <MyName/>
                <Content>
                    <hr style={hrStyle}/>
                </Content>
            <ExampleText />
                <Le>
                    <Learn />
                </Le>
        </Container>
    )
}
export const Container = styled.div`
    padding-top: 8em;
`;
export const Content = styled.div`
    padding-top: 40px;
    padding-left: 48%;
`;
export const Le = styled.div`
    padding-top: 35px;
    padding-left: 45%;
`;