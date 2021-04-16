import { createMuiTheme } from '@material-ui/core';
import React from 'react';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4281f5',
    },
    secondary: {
      main: '#f58d42',
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
  },
});
