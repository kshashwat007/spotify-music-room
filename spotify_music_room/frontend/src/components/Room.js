import React, { useState } from 'react';

const Room = (props) => {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  let roomCode = props.match.params.roomCode;
  return (
    <div>
      <h3>{roomCode}</h3>
      <p>Votes: {votesToSkip}</p>
      <p>Guest can pause: {guestCanPause}</p>
      <p>Is Host: {isHost}</p>
    </div>
  );
};

export default Room;
