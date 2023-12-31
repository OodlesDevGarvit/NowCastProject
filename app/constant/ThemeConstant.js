import { moderateScale, scale } from "react-native-size-matters";

const ThemeConstant = {

    //LAYOUT MARGIN__  DO NOT CHANGE THIS ,, IT WILL AFFECT ALL LAYOUTS -

    MARGIN_THICK: moderateScale(13),
    MARGIN_THIN: moderateScale(8),
    MARGIN_VERY_THIN: moderateScale(5),
    SHADOW_COLOR:'#696969',
    SHADOW_OFFSET:{ width: scale(2), height: scale(2) },

    /////////////////////


    THEME_BACKGROUND_COLOR: "#FAB031",
    THEME_BACKGROUND_COLOR_BLACK: "#042631",
    COLOR_LIGHT_GRAY: "#d3d3d3",
    COLOR_LIGHT_BLUE: "#E8F0FE",
    COLOR_FB: "#4267B2",
    COLOR_INSTA: "#fb3958",
    COLOR_YT: "#FF0000",
    COLOR_TWITTER: "#1DA1F2",


    ICON_SIZE_TINNY_SMALL: 16,
    ICON_SIZE_TINNY: 18,
    ICON_SIZE_GENERIC: 24,
    ICON_SIZE_SMALL: 25,
    ICON_SIZE_NORMAL: 26,
    ICON_SIZE_LARGE: 40,
    ICON_SIZE: 35,
    ICON_SIZE_EXTRA_LARGE: 44,
    ICON_SIZE_LARGEST: 130,
    BORDER_COLOR_BUTTON:'#7DE24E',
    PROFILE_IMAGE_SIZE: 125,
    PROFILE_IMAGE_UPLOAD_SIZE: 100,
    FORGOT_TEXT: '#FFC210',
    INPUT_COLOR: '#dadae8',
    ICON_COLOR: "#FFFFFF",
    ICON_COLOR_SECONDARY: "gray",
    ICONS_COLOR_DARK: "#000000",

    PRIMARY_COLOR: "#070138",
    ERROR_COLOR: "red",
    BACKGROUND_COLOR: "#FFFFFF",
    BACKGROUND_COLOR_ALPHA: "#EAEAEA",
    ACCENT_COLOR: "#AA0002",
    DARK_PRIMARY_COLOR: "#0B3C4B",
    BORDER_COLOR: "#040521",
    BORDER_COLOR_BETA: "#8C8C8C",
    BORDER_COLOR_LIGHT: "#d3d3d3",
    BACKGROUND_COLOR_SELECTED: "rgba(0,0,0,0.1)",
    AUTH_BUTTON_COLOR: "#1599ea", // for the selected list items---
    DEFAULT_IMAGE_BACKGROUND_COLOR: "#e6e6e6",

    SECONDARY_COLOR_TEXT: "#FFFFFF",
    TEXT_COLOR: "#000000",
    TEXT_COLOR_WHITE: "#FFFFFF",
    TEXT_COLOR_ALFA: "#808080",
    TEXT_COLOR_SUBTEXTS: "#696969",
    CREATE_COLOR: "rgb(10,10,10)",
    LINE_COLOR: "#A5A5A5",
    LINE_COLOR_2: "#D0D0D0",
    LINE_COLOR_3: "#E0E0E0",
    LINE_COLOR_GREY: "#707070",
    DIRECTORY_TEXT_COLOR: "#337AB7",
    TROPHY_CABINET_BG_COLOR: "#D7DECE",
    READMORE_TEXT_COLOR: "#8E0000",

    THEME_PRIMARY_COLOR: "#A5A5A5",
    THEME_ACCENT_COLOR: "#040521",
    THEME_MAIN_COLOR: "#010433",

    TEXT_SIZE_TINNY: 10,
    TEXT_SIZE_SMALL: 12,
    TEXT_SIZE_MEDIUM: 14,
    TEXT_SIZE_MEDIUM_1: 15,
    TEXT_SIZE_LARGE: 17,
    TEXT_SIZE_MEDIUM_LARGE_1: 18,
    TEXT_SIZE_MEDIUM_LARGE_2: 19,
    TEXT_SIZE_EXTRA_LARGE: 20,
    TEXT_SIZE_EXTRA_lARGE_MEDIUM_0: 22,
    TEXT_SIZE_EXTRA_lARGE_MEDIUM_1: 24,
    TEXT_SIZE_EXTRA_lARGE_MEDIUM_2: 26,
    TEXT_SIZE_EXTRA_lARGE_MEDIUM_3: 28,
    TEXT_SIZE_DOUBLE_EXTRA_LARGE: 30,
    TEXT_SIZE_DOUBLE_EXTRA_LARGE_2: 40,

    MARGIN_TINNY: 4,
    MARGIN_SMALL: 6,
    MARGIN_GENERIC: 8,
    MARGIN_NORMAL: 10,
    MARGIN_LARGE: 15,
    MARGIN_EXTRA_LARGE: 20,
    MARGIN_EXTRA_MEDIUM_LARGE: 25,
    MARGIN_TOO_LARGE: 30,
    MARGIN_DOUBLE_EXTRA_LARGE: 40,

    PADDING_TINNY: 4,
    PADDING_SMALL: 6,
    PADDING_GENERIC: 8,
    PADDING_NORMAL: 10,
    PADDING_LARGE: 15,
    PADDING_EXTRA_LARGE: 20,
    PADDING_EXTRA_MEDIUM_LARGE: 25,
    PADDING_TOO_LARGE: 30,
    PADDING_DOUBLE_EXTRA_LARGE: 40,

    HEIGHT_TINNY: 7,
    HIGHT: 44,
    BIG_HEIGHT: 42,
    HEIGHT_ROWS: 90,
    IMAGE_HEIGHT: 27,
    DOT_SIZE: 10,
    HOME_DOT_SIZE: 10,

    DOT_COLOR: "#FFFFFF",

    BORDER_WIDTH_TOO_TINNY: 0.2,
    BORDER_WIDTH_TINNY: 0.4,
    BORDER_WIDTH_SMALL: 0.5,
    BORDER_WIDTH: 1,
    LIGHT_BLACK: '#f000',
    REFER_BORDER_COLOR: "#0000003D",
    REFER_BORDER_ICON_COLOR: "#00000029",

    TEAM_TABLE_BG_COLOR_1: "#3C2F4F",
    TEAM_TABLE_BG_COLOR_2: "#333333",
    LEADERBOARD_TABLE_HEADING_COLOR: "#AA0002",
    TEXT_COLOR_LIGHT: '#656565',
    ERROR_WIDTH: "100%",

    BORDER_RADIUS_SMALL: 5,
    BORDER_RADIUS_NORMAL: 10,
    BORDER_RADIUS_LARGE: 15,
    BORDER_RADIUS_EXTRALARGE: 20,
    BORDER_RADIUS_MAXIMUM: 25,
    FONT_FAMILY: "System",
};


export const DynamicThemeConstants = {
    LIGHT: {
        BACKGROUND_COLOR_WHITE: "#FFF",
        BACKGROUND_COLOR_BLACK: '#000',
        BACKGROUND_COLOR_BODY: "#E5E4E2",
        BACKGROUND_COLOR_NOTE: "#FFF",
        TEXT_COLOR_PRIMARY: '#000',
        TEXT_COLOR_PRIMARY_REVERSE: '#fff',
        TEXT_COLOR_SECONDARY: 'gray',
        ICON_COLOR: '#010433',
        BORDER_COLOR_PRIMARY: '#D3D3D3',
        ICON_COLOR_BLACK: '#000',
        DRAWER_TEXT_COLOR: '#656565',
        BUTTON_COLOR: '#070138'
    },
    DARK: {
        BACKGROUND_COLOR_BLACK: '#000',
        BACKGROUND_COLOR_WHITE: "#FFF",
        BACKGROUND_COLOR_BODY: '#000',
        BACKGROUND_COLOR_NOTE: "#231F20",
        BACKGROUND_COLOR: '#000',
        TEXT_COLOR_PRIMARY: '#fff',
        TEXT_COLOR_PRIMARY_REVERSE: '#000',
        TEXT_COLOR_SECONDARY: 'rgba(255,255,255,0.6)',
        ICON_COLOR: '#fff',
        BORDER_COLOR_PRIMARY: 'gray',
        ICON_COLOR_WHITE: '#fff',
        DRAWER_TEXT_COLOR: '#gray',
        BUTTON_COLOR: '#656565',


    }
}

export const ThemeColors = {
    lightBlack: '#f000',

}
export default ThemeConstant;