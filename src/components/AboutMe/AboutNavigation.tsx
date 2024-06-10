import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components"

export const AboutNavigation = () => {
    const location = useLocation();
    return(
        <Container>
            <Link to={"/"}>
                <Icon icon={fa1.faUser} $isSelected={location.pathname === "/"} />
            </Link>
        </Container>
    )
}

export const Container = styled.div``;
export const Icon = styled(FontAwesomeIcon)<{$isSelected? : boolean}>``;