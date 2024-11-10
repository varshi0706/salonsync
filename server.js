const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/book-slot', (req, res) => {
  const { salon, time } = req.body;
  // Save booking to a database or in-memory storage
  res.send({ message: `Your slot at ${salon} for ${time} is confirmed.` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
