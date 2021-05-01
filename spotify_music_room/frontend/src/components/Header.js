import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

const Header = () => {
  return (
    <div style={{ marginBottom: 80 }}>
      <AppBar>
        <Toolbar>Spotify-Music-Room</Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
