const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

let overlayData = {
  player1: { name: 'Player 1', score: 0, team: ''},
  player2: { name: 'Player 2', score: 0, team: ''},
  round: 'Round 1',
};

app.get('/data', (req, res) => {
  res.json(overlayData);
});

app.post('/update', express.json(), (req, res) => {
  const { player1, player2, round } = req.body;
  overlayData = {
    player1: player1 || overlayData.player1,
    player2: player2 || overlayData.player2,
    round: round || overlayData.round,
  };
  res.status(200).send('Overlay updated');
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Make sure the path is correct
});
app.get('/control', (req, res) => {
  res.sendFile(path.join(__dirname, 'control.html')); // Ensure the path is correct
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
