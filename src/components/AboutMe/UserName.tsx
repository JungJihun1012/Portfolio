import styled from "styled-components";

export const UserName = () => {
    return(
        <Container>
            <Name>
                이름
            </Name>
            <MyName>
                정지훈
            </MyName>
        </Container>
    )
}

export const Container = styled.div``;
export const Name = styled.div``;
export const MyName = styled.div``;