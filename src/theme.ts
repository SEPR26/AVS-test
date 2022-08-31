import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        button: {
            textTransform: 'none'
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