import styled from "styled-components";
import { color } from "../../../shared/types/theme/Color";
import { font } from "../../../shared/types/theme/Font";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Container = styled.div`
    width: 250px;
    height: 350px;
    background-color: ${color.lightPink};
`;

export const Text = styled.p`
    font-size: ${font.Title};
    font-weight: ${font.Weight};
`;