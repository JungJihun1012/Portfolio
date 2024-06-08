import { FC, ReactNode } from "react";
import styled from "styled-components";

interface BkImageProps {
    children: ReactNode;
}

const BkImgae: FC<BkImageProps> = ({children}) => {
    return(
        <Container>
            <Image>
                {children}
            </Image>
        </Container>
    )
}
export const Container = styled.div``;
export const Image = styled.div`
    width: 100%;
    height: 590px;
    opacity: 0.8;
    background-image: url("Images/Background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
`;
export default BkImgae;