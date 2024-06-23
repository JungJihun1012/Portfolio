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
    box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, .2);
    -webkit-box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, .2);
    &:hover {
        transform: translateY(10px);
        transition: .5s;
    }
`;
export default Box;