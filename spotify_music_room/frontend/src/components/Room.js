import React, { useState } from 'react';

const Room = () => {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  return (
    <div>
      <p>Votes{votesToSkip}</p>
      <p>Guest can pause: {guestCanPause}</p>
      <p>Is Host: {isHost}</p>
    </div>
  );
};

export default Room;
