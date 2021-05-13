import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const JoinRoom = () => {
  const [roomCode, setroomCode] = useState('');
  const [error, setError] = useState('');

  const handleTextChange = (e) => {
    setroomCode(e.target.value);
  };

  const roomButtonPressed = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: roomCode
      })
    };
  };

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
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            onClick={roomButtonPressed}
          >
            Enter the room
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" color="secondary" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default JoinRoom;
