const MOVIE_LAND_COLORS = {
    /* Color Theme Swatches in Hex */
    "Blue-1": "#0E3FA9", // rgba(14,63,169, 1)
    "Blue-2": "#6193FF", // rgba(97,147,255, 1)
    "Blue-3": "#145FFF", // rgba(20,95,255, 1)
    "Blue-4": "#304980", // rgba(48,73,128, 1)
    "Blue-5": "#104CCC", // rgba(16,76,204, 1)

    /* Color Theme Swatches in Hex */
    "Yellow-1": "#FFA903", // rgba(255,169,3, 1)
    "Yellow-2": "#FFC44F", // rgba(255,196,79, 1)
    "Yellow-3": "#FFAB03", // rgba(255,171,3, 1)
    "Yellow-4": "#806228", // rgba(128,98,40, 1)
    "Yellow-5": "#CC8902", // rgba(204,137,2, 1)

    /* Color Theme Swatches in Hex */
    "Blue-Yellow-Complementary-1": "#2059A8", // rgba(32,89,168, 1)
    "Blue-Yellow-Complementary-2": "#A1C8FF", // rgba(161,200,255, 1)
    "Blue-Yellow-Complementary-3": "#006AFF", // rgba(0,106,255, 1)
    "Blue-Yellow-Complementary-4": "#FFA903", // rgba(255,169,3, 1)
    "Blue-Yellow-Complementary-5": "#FFE5B3", // rgba(255,229,179, 1)

    /* Color Theme Swatches in Hex */
    "Triad-2-Red": "#FF3912", // rgba(255,57,18, 1)
    "Triad-3-Medium-Blue": "#0051FF", // rgba(0,81,255, 1)
    "Triad-4-Bright-Green": "#AFFF19", // rgba(175,255,25, 1)
    "Triad-5-Medium-Green": "#78B309", // rgba(120,179,9, 1)
};

const colors = {
    navyBlue: "#020B40",
    richBlue: "#022873",
    marineGreen: "#027373",
    darkestBlue: "#00072B",
    lightestBlue: "#EDF0FF",
    yellow: MOVIE_LAND_COLORS["Yellow-1"],
    blue: MOVIE_LAND_COLORS["Blue-1"],
    lightBlue: MOVIE_LAND_COLORS["Blue-Yellow-Complementary-2"],
    red: MOVIE_LAND_COLORS["Triad-2-Red"],
    green: MOVIE_LAND_COLORS["Triad-5-Medium-Green"],
    white: "#FFF",
};

const palette = {
    text: {
        color: colors.darkestBlue,
    },
};

const spacing = {
    twoExtraSmall: "0.25rem",
    extraSmall: "0.5rem",
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    extraLarge: "2rem",
    twoExtraLarge: "2.5rem",
    threeExtraLarge: "3rem",
};

const fonts = {
    regular: {
        fontFamily: 'mr-eaves-xl-modern, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontStyle: "normal",
    },
    regularItalic: {
        fontFamily: 'mr-eaves-xl-modern, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontStyle: "italic",
    },
    bold: {
        fontFamily: 'mr-eaves-xl-modern, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 700,
        fontStyle: "normal",
    },
    boldItalic: {
        fontFamily: 'mr-eaves-xl-modern, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 700,
        fontStyle: "italic",
    },
    heavy: {
        fontFamily: 'mr-eaves-xl-modern, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 800,
        fontStyle: "normal",
    },
    heavyItalic: {
        fontFamily: 'mr-eaves-xl-modern, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 800,
        fontStyle: "italic",
    },
};

const fontSize = {
    extraSmall: "0.5rem",
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    extraLarge: "2rem",
    twoExtraLarge: "2.5rem",
};

const page = {
    width: "1280px",
    columns: 12,
    columnGutter: "1rem",
    columnWidth: "92px",
};

export default {
    colors,
    fonts,
    fontSize,
    page,
    palette,
    spacing,
};
