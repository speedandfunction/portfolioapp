import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    // type: 'light',
  },
  spacing: 10,
  typography: {
    fontFamily: ['Roboto', 'Open Sans', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    useNextVariants: true,
  },
});

export default theme;
