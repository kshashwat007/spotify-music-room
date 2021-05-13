import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const JoinRoom = () => {
  const [roomCode, setroomCode] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="center" align="center">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            Join a room
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={error}
            label="Code"
            placeholder="Enter a room code"
            value={roomCode}
            helperText={error}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default JoinRoom;
