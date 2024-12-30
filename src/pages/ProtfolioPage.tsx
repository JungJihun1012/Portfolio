
import styled from "styled-components";

const ProtfolioPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nav = [
        { idx: 0, name: "About me" },
        { idx: 1, name: "Skills" },
        { idx: 2, name: "Archiving" },
        { idx: 3, name: "Projects" },
        { idx: 4, name: "Career" }
    ]
    return (
        <Container>
            {
                nav.length == 0 ?
                    <div>null</div>
                    :
                    <Navbar>
                        <List>
                            <StyleTitle>
                                Portfolio
                            </StyleTitle>
                            {nav.map(({ idx, name }) => (
                                <Menu key={idx}>
                                    <StyleMenu>
                                        {name}
                                    </StyleMenu>
                                </Menu>
                            ))}
                        </List>
                    </Navbar>
            }
        </Container>
    )
}
const Container = styled.div`
    flex: 1;
`;
const Navbar = styled.div`
    flex: 1;
`;
const List = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    height: 65px;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
`;
const StyleTitle = styled.div`
    transition: all .2s;
    &:hover {
        text-decoration: underline;
        color: #7a7878;
    }
`;
const Menu = styled.div`
    transition: all .2s;
    &:hover {
        text-decoration: underline;
        color: #7a7878;
    }
`;
const StyleMenu = styled.div`
    transition: all .2s;
    &:hover {
        text-decoration: underline;
        color: #7a7878;
    }
`;
export default ProtfolioPage;