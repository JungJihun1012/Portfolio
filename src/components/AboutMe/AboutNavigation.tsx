import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar, faEnvelope, faLocationDot, faPencil, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import { UserName } from "./UserName";
import React from "react";

export const AboutNavigation: React.FC = () => {
    const location = useLocation();
    return (
        <Container>
            <Icon
            icon={faUser}
            $isSelected={location.pathname === "/"}
            >
                <UserName />
            </Icon>
            <Icon
            icon={faCalendar}
            $isSelected={location.pathname.includes("/Calendar")}
            />
            <Icon
            icon={faLocationDot}
            $isSelected={location.pathname.includes("/LocationDot")}
            />
            <Icon
            icon={faPhone}
            $isSelected={location.pathname.includes("/Phone")}
            />
            <Icon
            icon={faEnvelope}
            $isSelected={location.pathname.includes("/Envelope")}
            />
            <Icon
            icon={faPencil}
            $isSelected={location.pathname.includes("/Pencil")}
            />
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