import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            borderRadius: '6px',
            textTransform: 'none',
          },
        },
      },
    },
  });