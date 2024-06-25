import styled from "styled-components"

export const SectionText = () => {
    return(
        <Container>
            <Ul>
                <Li>프로젝트, 프로그램 소스 코드</Li>
                <Li>혼자서 코딩 연습을 위해 연습하는 소스 코드</Li>
                <Li>현재 재학중인 수업들의 코딩 과제 소스 코드</Li>
            </Ul>
        </Container>
    )
}

export const Container = styled.div`
    padding-top: 17px;
    width: 85%;
    margin: 0 auto;
`;
export const Ul = styled.ul``;
export const Li = styled.li`
    line-height: 30px;
`;