import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        button: {
            textTransform: 'none'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1280
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    minWidth: '320px',
                    backgroundColor: '#FFFFFF',
                    color: '#181C47'
                }
            }
        },

    }
});