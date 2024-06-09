import styled from "styled-components"

export const Introduction = () => {
    return(
        <Container>
            <Int>
                About me
            </Int>
            <Int>
                Skills
            </Int>
            <Int>
                Archiving
            </Int>
            <Int>
                Projects
            </Int>
            <Int>
                Career
            </Int>
        </Container>
    )  
}
export const Container = styled.div`
    display: flex;
    gap: 25px;
`;
export const Int = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;