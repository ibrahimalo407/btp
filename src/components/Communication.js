// src/components/Communication.js
import React, { useState } from 'react';
import { Paper, Typography, Button, TextField } from '@mui/material';
import './Communication.css';

const Communication = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [documents, setDocuments] = useState([]);

  const sendMessage = () => {
    setMessages([...messages, message]);
    setMessage('');
  };

  const uploadDocument = (event) => {
    const file = event.target.files[0];
    setDocuments([...documents, file]);
  };

  return (
    <Paper className="communication">
      <div className="communication-header">
        <Typography variant="h4" gutterBottom>Communication</Typography>
      </div>

      <div className="messages">
        <Typography variant="h5">Messages</Typography>
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
        ))}
        <TextField
          label="Nouveau message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={sendMessage}>Envoyer</Button>
      </div>

      <div className="documents">
        <Typography variant="h5">Documents</Typography>
        {documents.map((doc, index) => (
          <div key={index} className="document">{doc.name}</div>
        ))}
        <Button variant="contained" component="label">
          Télécharger un document
          <input type="file" hidden onChange={uploadDocument} />
        </Button>
      </div>
    </Paper>
  );
};

export default Communication;
