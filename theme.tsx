import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2c3e50',
        },
        secondary: {
            main: '#ecf0f1',
        },
    },
    typography: {
        h1: {
            fontSize: '4.5rem'
        }
    }
});

export default theme