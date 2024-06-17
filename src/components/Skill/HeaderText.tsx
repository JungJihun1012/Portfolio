import styled from "styled-components"

export const HeaderText = () => {
    return(
        <Container>
            <Text>
                Skill
            </Text>
        </Container>
    )
}

export const Container = styled.div``;
export const Text = styled.div`
    padding-top: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
`;