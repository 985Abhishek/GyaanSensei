// import React, { useEffect, useState } from 'react';
// import { Box, TextField, Button, Typography, List, ListItem } from '@mui/material';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3000'); // Replace PORT with your backend port

// const ChatComponent = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [userId] = useState('YOUR_USER_ID'); // Replace with actual user ID logic

//   useEffect(() => {
//     // Listen for incoming messages
//     socket.on('receive_message', (data) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });

//     return () => {
//       socket.off('receive_message');
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim()) {
//       const messageData = {
//         senderId: userId,
//         recipientId: 'RECIPIENT_USER_ID', // Replace with actual recipient user ID
//         text: message,
//       };

//       // Emit the message to the server
//       socket.emit('send_message', messageData);
//       setMessage('');
//     }
//   };

//   return (
//     <Box sx={{ width: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
//       <Typography variant="h5" gutterBottom>
//         Chat Room
//       </Typography>
//       <List sx={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '20px' }}>
//         {messages.map((msg, index) => (
//           <ListItem key={index}>
//             <strong>{msg.senderId}:</strong> {msg.text}
//           </ListItem>
//         ))}
//       </List>
//       <TextField
//         label="Type a message"
//         variant="outlined"
//         fullWidth
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <Button variant="contained" color="primary" onClick={sendMessage} sx={{ marginTop: '10px' }}>
//         Send
//       </Button>
//     </Box>
//   );
// };

// export default ChatComponent;
