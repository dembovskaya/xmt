import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    // @ts-ignore
    type: "light",
    primary: {
      main: "#2B2D2D",
      light: "#F5F5F5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#F5F5F5",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#4E4F52",
      secondary: "#F04E36",
      disabled: "#848484",
    },
    divider: "#4E4F52",
    button: {
      contained: {
        main: "#F04E36",
        contrastText: "#FFF",
        variant: "contained",
        textTransform: "none",
        "&:hover": {
          main: "#F04E36",
          contrastText: "#F04E36",
          variant: "outlined",
          textTransform: "none",
        },
        "&:active": {
          main: "#D94B36",
          contrastText: "#FFF",
          variant: "contained",
          textTransform: "none",
        },
        "&:disabled": {
          main: "#C3C4C6",
          contrastText: "#C3C4C6",
          variant: "outlined",
          textTransform: "none",
        },
      },
      outlinedLightTheme: {
        main: "#2B2D2D",
        contrastText: "#2B2D2D",
        variant: "outlined",
      },
      outlinedDarkTheme: {
        main: "#FFF",
        contrastText: "#C3C4C6",
        variant: "outlined",
      },
      text: {
        main: "#2B2D2D",
        contrastText: "#C3C4C6",
        variant: "text",
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: "72px",
  lineHeight: "80px",
  fontFamily: "Manrope",
  fontWeight: "700",
  // '@media (min-width:600px)': {
  //     fontSize: '1.5rem',
  //     color: 'blue'
  // },
  // [theme.breakpoints.up('md')]: {
  //     fontSize: '2.4rem',
  // },
};

theme.typography.h2 = {
  fontSize: "48px",
  lineHeight: "56px",
  fontFamily: "Manrope",
  fontWeight: "700",
};

theme.typography.h3 = {
  fontSize: "40px",
  lineHeight: "48px",
  fontFamily: "Manrope",
  fontWeight: "600",
};

theme.typography.h4 = {
  fontSize: "32px",
  lineHeight: "40px",
  fontFamily: "Manrope",
  fontWeight: "700",
};

theme.typography.h5 = {
  fontSize: "20px",
  lineHeight: "27px",
  fontFamily: "Manrope",
  fontWeight: "400",
};

theme.typography.h6 = {
  fontSize: "20px",
  lineHeight: "32px",
  fontFamily: "Manrope",
  fontWeight: "400",
};

theme.typography.subtitle2 = {
  fontSize: "16px",
  lineHeight: "26px",
  fontFamily: "Manrope",
  fontWeight: "400",
};

theme.typography.subtitle1 = {
  fontSize: "18px",
  lineHeight: "25px",
  fontFamily: "Manrope",
  fontWeight: "400",
};
