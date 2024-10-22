const express = require('express');
const Fuse = require('fuse.js');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Load FAQ data from JSON file
const faqs = JSON.parse(fs.readFileSync('faqs.json'));

// Fuse.js configuration for fuzzy search
const fuse = new Fuse(faqs, {
  keys: ['question', 'answer'],  // Searching both question and answer
  includeScore: true,
  threshold: 0.3,  // Adjust threshold for better matching
});

// Middleware to parse JSONa
app.use(express.json());

// Search endpoint
app.get('/search', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'No query provided' });
  }

  // Perform fuzzy search
  const results = fuse.search(query).map(result => result.item);
  res.json(results);
});

// Autocomplete endpoint
app.get('/autocomplete', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'No query provided' });
  }

  // Perform fuzzy search and return only the top 5 suggestions for autocomplete
  const results = fuse.search(query, { limit: 5 }).map(result => result.item.question);
  res.json(results);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
