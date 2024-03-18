import { createTheme } from '@mui/material/styles';
import { Poppins } from '@fontsource/poppins';

const colorTheme = createTheme({
    palette:{
        brand500:{
            main: '#4318FF' //blue
        },
        brand400:{
            main:'#7551FF'  //purple
        },
        brand200:{
            main:'#9374FF'  //lavender
        },
        brand100:{
            main:'#E9E3FF'  //light lavender
        },
        
        gray100:{
            main:'#EDF2F7'
        },
    },
    typography: {
        fontFamily: [
            'Poppins', // primary font
            '"Segoe UI"',
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),
        mono: "Menlo, monospace",
    },
});

export default colorTheme;
