import styled from "styled-components"

export const Pencil = () => {
    return(
        <Container>
            <Pn>학력</Pn>
            <School>
                서울디지텍고등학교 <br />
                (빅데이터과)
            </School>
        </Container>
    )
}

export const Container = styled.div``;
export const Pn = styled.div``;
export const School = styled.div``;