import React, { useState } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Room = (props) => {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  let roomCode = props.match.params.roomCode;

  const getRoom = () => {
    fetch('/api/get-room' + '?code=' + roomCode).then((response) =>
      response.json().then((data) => {
        setVotesToSkip(data.votes_to_skip),
          setGuestCanPause(data.guest_can_pause),
          setIsHost(data.is_host);
      })
    );
  };
  getRoom();
  return (
    <div className="center">
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Code: {roomCode}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h6" component="h6">
            Votes: {votesToSkip}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h6" component="h6">
            Guest can pause: {guestCanPause.toString()}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h6" component="h6">
            Is Host: {isHost.toString()}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Button variant="outlined" color="secondary" to="/" component={Link}>
            Leave room
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Room;
