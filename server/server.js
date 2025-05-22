const express = require('express');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('✅ Server is up and responding!');
});


// Server start
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
