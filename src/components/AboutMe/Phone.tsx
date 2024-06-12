import styled from "styled-components"

export const Phone = () => {
    return(
        <Container>
            <Pn>연락처</Pn>
            <PhoneNumber>010-4744-5764</PhoneNumber>
        </Container>
    )
}

export const Container = styled.div``;
export const Pn = styled.div``;
export const PhoneNumber = styled.div``;