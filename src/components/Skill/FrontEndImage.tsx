import styled from "styled-components"

export const FrontEndImage = () => {
    return(
        <Container>
            <HtmlCssJs />
            <Ts />
            <React />
        </Container>
    )
}

export const Container = styled.div`
    padding-top: 10px;
`;
export const HtmlCssJs = styled.div`
    background-image: url("Images/HtmlCssJs.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 200px;
    height: 81px;
`;
export const Ts = styled.div`
    background-image: url("Images/Ts.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100px;
    height: 80px;
`;
export const React = styled.div`
    background-image: url("Images/React.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100px;
    height: 100px;
`;  