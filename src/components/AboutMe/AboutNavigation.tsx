import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components"

export const AboutNavigation = () => {
    const location = useLocation();
    return (
        <Container>
            <Link to={"/"}>
                <Icon icon={faUser} $isSelected={location.pathname === "/"} />
            </Link>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Icon = styled(FontAwesomeIcon) <{ $isSelected?: boolean }>`
   color: ${(props) => (props.$isSelected ? 'black' : '#BABABA')};
   font-size: 24px;
`;