// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    subtitle1: {
      fontSize: '1.2rem',
      color: '#666666',
    },
    body1: {
      fontSize: '1rem',
      color: '#444444',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#555555',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          marginBottom: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
          margin: '10px 0',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '20px 0',
        },
      },
    },
  },
});

export default theme;
