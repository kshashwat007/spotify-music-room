import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core';

const Header = () => {
  const { header } = useStyles();

  const logo = (
    <ThemeProvider theme={theme}>
      <Typography variant="h6" component="h1">
        Music-Room
      </Typography>
    </ThemeProvider>
  );

  return (
    <div style={{ marginBottom: 80 }}>
      <AppBar elevation={1} className={header}>
        <Toolbar>{logo}</Toolbar>
      </AppBar>
    </div>
  );
};

const theme = createMuiTheme({
  typography: {
    fontSize: 25,
    fontFamily: 'Work Sans, sans-serif',
    textAlign: 'center',
    fontWeight: 700,
    color: '#FFFEFE'
  }
});

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#1DB954',
    alignItems: 'center'
  }
}));

export default Header;
