import { extendTheme} from '@chakra-ui/react'
import buttonTheme from './button.theme'
import labelTheme from './label.theme'
import modalTheme from './modal.theme'
import textTheme from './text.theme'

const customTheme ={
    components : {
        Button : buttonTheme,
        Modal : modalTheme,
        Text: textTheme,
        FormLabel : labelTheme
    },
    colors : {
        brand: {
        brand1: "#4529E6",
        brand2: "#5126EA",
        brand3: "#B0A6F0",
        brand4: "#EDEAFD"
    },

    greyScale: {
        grey0: "#0B0D0D",
        grey1: "#212529",
        grey2: "#495057",
        grey3: "#868E96",
        grey4: "#ADB5BD",
        grey5: "#CED4DA",
        grey6: "#DEE2E6",
        grey7: "#E9ECEF",
        grey8: "#F1F3F5",
        grey9: "#F8F9FA",
        grey10: "#FDFDFD",
        whiteFixed: "#FFFFFF"
    },

    feedback: {
        alert1: "#CD2B31",
        alert2: "#FDD8D8",
        alert3: "#FFE5E5",
        sucess1: "#18794E",
        sucess2: "#CCEBD7",
        sucess3:"#DDF3E4"
    },

    colorsRandomProfile: {
        random1: "#E34D8C",
        random2: "#C04277",
        random3: "#7D2A4D",
        random4: "#7000FF",
        random5: "#6200E3",
        random6: "#36007D",
        random7:"#349974",
        random8: "#2A7D5F",
        random9: "#153D2E",
        random10: "#6100FF",
        random11: "#5700E3",
        random12: "#30007D"
    }
},
    fonts: {

        inter : "Inter, sans-serif",
        lexend : "Lexend, sans-serif",
        
        "Heading-1-700": {
            size: "44px",
            weight: 700
        },

        "Heading-2-600": {
            size: "36px",
            weight: 600
        },

        "Heading-3-600": {
            size: "32px",
            weight: 600
        },

        "Heading-3-500": {
            size: "32px",
            weight: 500
        },

        "Heading-4-600": {
            size: "28px",
            weight: 600
        },

        "Heading-4-500": {
            size: "28px",
            weight: 500
        },

        "Heading-5-600": {
            size: "24px",
            weight: 600
        },

        "Heading-5-500": {
            size: "24px",
            weight: 500
        },

        "Heading-6-600": {
            size: "20px",
            weight: 600
        },

        "Heading-6-500": {
            size: "20px",
            weight: 500
        },

        "Heading-7-600": {
            size: "16px",
            weight: 600
        },

        "Heading-7-500": {
            size: "16px",
            weight: 500
        },

        "body-1-400": {
            size: "16px",
            weight: 400
        },

        "body-1-600": {
            size: "16px",
            weight: 600
        },

        "body-2-400": {
            size: "14px",
            weight: 400
        },

        "body-2-500": {
            size: "14px",
            weight: 500
        },

        "button-big-text": {
            size: "16px",
            weight: 600
        },

        "button-medium-text": {
            size: "14px",
            weight: 600
        },

        "input-placeholder": {
            size: "16px",
            weight: 400
        },

        "input-label": {
            size: "14px",
            weight: 500
        },
    },
    fontSizes : {
        "Heading-1-700": {
            size: "44px",
            weight: 700
        },

        "Heading-2-600": {
            size: "36px",
            weight: 600
        },

        "Heading-3-600": {
            size: "32px",
            weight: 600
        },

        "Heading-3-500": {
            size: "32px",
            weight: 500
        },

        "Heading-4-600": {
            size: "28px",
            weight: 600
        },

        "Heading-4-500": {
            size: "28px",
            weight: 500
        },

        "Heading-5-600": {
            size: "24px",
            weight: 600
        },

        "Heading-5-500": {
            size: "24px",
            weight: 500
        },

        "Heading-6-600": {
            size: "20px",
            weight: 600
        },

        "Heading-6-500": {
            size: "20px",
            weight: 500
        },

        "Heading-7-600": {
            size: "16px",
            weight: 600
        },

        "Heading-7-500": {
            size: "16px",
            weight: 500
        },

        "body-1-400": {
            size: "16px",
            weight: 400
        },

        "body-1-600": {
            size: "16px",
            weight: 600
        },

        "body-2-400": {
            size: "14px",
            weight: 400
        },

        "body-2-500": {
            size: "14px",
            weight: 500
        },

        "button-big-text": {
            size: "16px",
            weight: 600
        },

        "button-medium-text": {
            size: "14px",
            weight: 600
        },

        "input-placeholder": {
            size: "16px",
            weight: 400
        },

        "input-label": {
            size: "14px",
            weight: 500
        },
    },
    fontWeights : {
        "Heading-1-700": {
            size: "44px",
            weight: 700
        },

        "Heading-2-600": {
            size: "36px",
            weight: 600
        },

        "Heading-3-600": {
            size: "32px",
            weight: 600
        },

        "Heading-3-500": {
            size: "32px",
            weight: 500
        },

        "Heading-4-600": {
            size: "28px",
            weight: 600
        },

        "Heading-4-500": {
            size: "28px",
            weight: 500
        },

        "Heading-5-600": {
            size: "24px",
            weight: 600
        },

        "Heading-5-500": {
            size: "24px",
            weight: 500
        },

        "Heading-6-600": {
            size: "20px",
            weight: 600
        },

        "Heading-6-500": {
            size: "20px",
            weight: 500
        },

        "Heading-7-600": {
            size: "16px",
            weight: 600
        },

        "Heading-7-500": {
            size: "16px",
            weight: 500
        },

        "body-1-400": {
            size: "16px",
            weight: 400
        },

        "body-1-600": {
            size: "16px",
            weight: 600
        },

        "body-2-400": {
            size: "14px",
            weight: 400
        },

        "body-2-500": {
            size: "14px",
            weight: 500
        },

        "button-big-text": {
            size: "16px",
            weight: 600
        },

        "button-medium-text": {
            size: "14px",
            weight: 600
        },

        "input-placeholder": {
            size: "16px",
            weight: 400
        },

        "input-label": {
            size: "14px",
            weight: 500
        },
    },
    breakpoints : {
        phone : "0px",
        tablet : "600px",
        desktopSmall : "992px",
        desktopLarge : "1200px",
    }
}
const theme = extendTheme(customTheme)

export {customTheme,theme}