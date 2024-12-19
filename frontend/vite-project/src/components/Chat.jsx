import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { io } from 'socket.io-client';
import UserList from './UserList';
import Chat from './Chat';

const socket = io('http://localhost:5000');

function App() {
  const [username, setUsername] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleSetUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleJoinChat = () => {
    if (username) {
      socket.emit('setOnline', username); 
      setIsConnected(true);
    }
  };

  useEffect(() => {
    socket.on('userStatus', ({ username, status }) => {
      console.log(`${username} is ${status}`);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      {!isConnected ? (
        <Box>
          <Typography variant="h4">Join the Chat</Typography>
          <input type="text" value={username} onChange={handleSetUsername} placeholder="Enter your username" />
          <button onClick={handleJoinChat}>Join</button>
        </Box>
      ) : (
        <>
          <Typography variant="h4">Chat Room</Typography>
          <UserList socket={socket} />
          <Chat socket={socket} username={username} />
        </>
      )}
    </Container>
  );
}

export default App;
