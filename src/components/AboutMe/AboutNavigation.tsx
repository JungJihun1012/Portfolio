import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faEnvelope, faLocationDot, faPencil, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { UserName } from "./UserName";
import { BirthDay } from "./BirthDay";
import { LoactionDot } from "./LocationDot";
import { Phone } from "./Phone";
import { Email } from "./Email";
import { Pencil } from "./Pencil";

export const AboutNavigation: React.FC = () => {
    const location = useLocation();
    return (
        <Container>
            <Content>
                <IconWrapper $isSelected={location.pathname === "/"}>
                    <FontAwesomeIcon icon={faUser} />
                    <UserName />
                </IconWrapper>
                <IconWrapper $isSelected={location.pathname.includes("/Calendar")}>
                    <FontAwesomeIcon icon={faCalendar} />
                    <BirthDay />
                </IconWrapper>
                <IconWrapper $isSelected={location.pathname.includes("/LocationDot")}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <LoactionDot />
                </IconWrapper>
            </Content>
            <IconContent>

                <IconWrapper $isSelected={location.pathname.includes("/Phone")}>
                    <FontAwesomeIcon icon={faPhone} />
                    <Phone />
                </IconWrapper>
                <IconWrapper $isSelected={location.pathname.includes("/Envelope")}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <Email />
                </IconWrapper>
                <IconWrapper $isSelected={location.pathname.includes("/Pencil")}>
                    <FontAwesomeIcon icon={faPencil} />
                    <Pencil />
                </IconWrapper>
            </IconContent>
        </Container>
    );
};

const Container = styled.div`
    display: block;
    padding-top: 50px;
`;

const Content = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    line-height: 2.5em;
    gap: 17%;
`;
const IconContent = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    line-height: 2.5em;
    gap: 10%;
`;
const IconWrapper = styled.div<{ $isSelected?: boolean }>`
    display: flex;
    align-items: center;
    gap: 40px;
    color: ${(props) => (props.$isSelected ? 'black' : 'black')};
    font-size: 24px;
    margin: 0 8px;
`;
