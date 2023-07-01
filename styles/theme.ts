import { DefaultTheme } from "./styled"
const rem = (value: number) => { return value + "rem" }
const theme: DefaultTheme = {
    color: {
        main: "#FE4C40",
        default: "#091E42"
    },
    fontSize: {
        H900: rem(9.3),
        H800: rem(5.8),
        H700: rem(4.7),
        H600: rem(4.0),
        H500: rem(3.6),
        H400: rem(3.2),
        H300: rem(2.8),
        H200: rem(2.4),
        H100: rem(2.0),
        H75: rem(1.8),
        H50: rem(1.6),
        P200: rem(1.4),
        P100: rem(1.2),
        P75: rem(1.1),
        P50: rem(1.0),
    },
    letterSpacing: {
        wide: 1.6,
        normal: -0.3,
        narrow: 1.2,
    },
    lineHeight: {
        high: 1.9,
        normal: 1.6,
        low: 1.2,
    },
    svgColor: {
        N100: "invert(56%) sepia(18%) saturate(395%) hue-rotate(179deg) brightness(91%) contrast(86%)",
        main: "invert(70%) sepia(15%) saturate(20%) hue-rotate(96deg) brightness(105%) contrast(98%)",
        grayscale500: "invert(90%) sepia(0%) saturate(2150%) hue-rotate(315deg) brightness(107%) contrast(54%)",
        primary800: "invert(19%) sepia(63%) saturate(2452%) hue-rotate(222deg) brightness(79%) contrast(105%)",
        N500: "invert(32%) sepia(13%) saturate(1037%) hue-rotate(180deg) brightness(97%) contrast(99%)",
        N900: "invert(6%) sepia(40%) saturate(5601%) hue-rotate(214deg) brightness(93%) contrast(94%)",
        B300: "invert(26%) sepia(86%) saturate(4676%) hue-rotate(213deg) brightness(104%) contrast(105%)",
        N80: "invert(74%) sepia(18%) saturate(229%) hue-rotate(179deg) brightness(83%) contrast(88%)",
        N50: "invert(93%) sepia(6%) saturate(312%) hue-rotate(175deg) brightness(87%) contrast(86%)",
        N0: "invert(100%) sepia(100%) saturate(0%) hue-rotate(69deg) brightness(104%) contrast(102%)",
        N60: "invert(96%) sepia(1%) saturate(6203%) hue-rotate(189deg) brightness(75%) contrast(107%)",
        BB500: "invert(17%) sepia(57%) saturate(3110%) hue-rotate(225deg) brightness(98%) contrast(91%);"
    },
    shadow: {
        Float1: "0px 4px 12px rgba(0, 0, 0, 0.16), 4px 4px 28px rgba(0, 0, 0, 0.08)",
    },
    radius: {
        radius1: rem(0.4),
        radius2: rem(0.8),
        radius3: rem(1.2),
        radius4: rem(1.6)
    },
    fontWeight: {
        BlackBold: 900,
        Bold: 700,
        Medium: 500,
        Regular: 400,
        Light: 300,
    },
    device: {
        smMoblie: `screen and (max-width:330px)`,
        mobile: `screen and (min-width: 330px) and (max-with: 767px)`,
        tablet: `screen and (min-width:768px) and (max-width: 1023px)`,
        pc: `screen and (min-width:1024px)`,
        moblie_pc: `screen and (min-width: 600px)`,
    },
}

export { theme }