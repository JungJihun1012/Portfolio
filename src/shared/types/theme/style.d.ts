import 'styled-components';
import { ColorType, FontType } from "./ThemeTypes"

declare module 'styled-components' {
    export interface DefaultTheme {
        light: {
            color: ColorType,
            font: FontType
        }
    }
}