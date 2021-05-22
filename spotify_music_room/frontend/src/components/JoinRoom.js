import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const JoinRoom = (props) => {
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
    fetch('/api/join-room', requestOptions)
      .then((response) => {
        if (response.ok) {
          props.history.push(`/room/${roomCode}`);
        } else {
          setError('Room not found');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Join a room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
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
      <Grid item xs={12} align="center">
        <Button variant="outlined" color="primary" onClick={roomButtonPressed}>
          Enter the room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="outlined" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default JoinRoom;
