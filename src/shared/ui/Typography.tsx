import styled, { CSSProperties } from "styled-components";
import type { ColorKeys, FontKeys } from "../types/theme";
import { FC } from "react";

export interface TypographyPorps {
    children: string|number;
    size?: FontKeys;
    color?: ColorKeys;
    weight?: CSSProperties['fontWeight'];
};

export const Typography:FC<TypographyPorps> = ({
    children,
    size = 'Body',
    color  = 'text',
    weight = 'normal',
}) => {
    return (
        <>
            <Text $size={size} $color={color} $weight={weight}>{children}</Text>
        </>
    )
}

interface TextProps {
    $size: TypographyPorps['size'];
    $color: TypographyPorps['color'];
    $weight: TypographyPorps['weight'];
}
const Text = styled.p<TextProps>`
    font-size: ${({theme, $size}) => theme.light.font[$size!]};
    color: ${({theme, $color}) => theme.light.color[$color!]};
    font-weight: ${({$weight}) => $weight};
`;