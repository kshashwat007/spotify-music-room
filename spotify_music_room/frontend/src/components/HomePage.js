import React, { useEffect, useState } from 'react';
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';
import Header from './Header';
import Room from './Room';
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const HomePage = (props) => {
  const [roomCode, setRoomCode] = useState(null);

  useEffect(() => {
    fetch('/api/get-user')
      .then((response) => response.json())
      .then((data) => {
        setRoomCode(data.code);
      });
  });

  const homePage = () => {
    return (
      <div className="center">
        <Grid container spacing={3} alignIt="center">
          <Grid item xs={12} align="center">
            <Typography variant="h3" component="h3">
              Join or create a music room!
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button
                variant="contained"
                color="primary"
                to="/join"
                component={Link}
              >
                Join a room
              </Button>
              <Button
                variant="contained"
                color="secondary"
                to="/create"
                component={Link}
              >
                Create a room
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
    );
  };

  const clearRoomCodeCallback = () => {
    setRoomCode(null);
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return roomCode ? (
              <Redirect to={`/room/${roomCode}`} />
            ) : (
              homePage()
            );
          }}
        ></Route>
        <Route path="/join" component={JoinRoom} />
        <Route path="/create" component={CreateRoom} />
        <Route
          path="/room/:roomCode"
          render={(props) => {
            return <Room {...props} clearRoomCode={clearRoomCodeCallback} />;
          }}
        />
      </Switch>
    </Router>
  );
};

export default HomePage;
