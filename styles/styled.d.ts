import "styled-components";

export interface DefaultTheme {
    color: {
        main: string;
        default: string;
    },
    fontSize: {
        H900: string;
        H800: string;
        H700: string;
        H600: string;
        H500: string;
        H400: string;
        H300: string;
        H200: string;
        H100: string;
        H75: string;
        H50: string;
        P200: string;
        P100: string;
        P75: string;
        P50: string;
    },
    svgColor: {
        main: string;
        grayscale500: string;
        primary800: string;
        N50: string;
        N100: string;
        N500: string;
        N900: string;
        B300: string;
        N80: string;
        N0: string;
        N60: string;
        BB500: string;
    },
    fontWeight: {
        BlackBold: number;
        Bold: number;
        Medium: number;
        Regular: number;
        Light: number;
    },
    shadow: {
        Float1: string;
    },
    lineHeight: {
        high: number;
        normal: number;
        low: number;
    },
    letterSpacing: {
        wide: number;
        normal: number;
        narrow: number;
    },
    radius: {
        radius1: string,
        radius2: string,
        radius3: string,
        radius4: string,
    },
    device: {
        smMoblie: string,
        mobile: string,
        tablet: string,
        pc: string,
        moblie_pc: string
    }
}
