import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, makeStyles } from '@material-ui/core';

const CreateRoom = () => {
  const { create_room_div } = useStyles();
  let defaultVotes = 2;

  return (
    <div className={create_room_div}>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs={12} align="center">
          <Typography variant="h4" component="h4">
            Create A Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Control Playback</div>
              <RadioGroup row defaultValue="true">
                <FormControlLabel
                  value="true"
                  control={<Radio color="primary" />}
                  label="Play/Pause"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio color="secondary" />}
                  label="No control"
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="number"
              defaultValue={defaultVotes}
              inputProps={{ min: 1, style: { textAlign: 'center' } }}
            />
            <FormHelperText>
              <div align="center">Votes required to skip</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="primary" variant="outlined">
            Create the room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="outlined" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  create_room_div: {
    margin: '0 auto',
    width: '50%',
    marginLeft: '82%'
  }
}));

export default CreateRoom;
