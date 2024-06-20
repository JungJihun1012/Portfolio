import { ReactNode } from "react";
import styled from "styled-components";

interface BoxProps {
    children: ReactNode;
}

const Box = ({children}: BoxProps) => {

    return(
        <Container>
            <MiddleContent>
                {children}
            </MiddleContent>
        </Container>
    )
}

export const Container = styled.div``;
export const MiddleContent = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 230px;
    height: 35vh;
`;
export default Box;