const express = require('express');
const Fuse = require('fuse.js');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Load FAQ data from JSON file and log to check if it's accessible
let faqs;
try {
  faqs = JSON.parse(fs.readFileSync('faqs.json', 'utf8'));
  console.log(faqs);  // Check if faqs data is being loaded
} catch (error) {
  console.error("Error reading or parsing faqs.json:", error);
  process.exit(1);  // Exit if the file can't be read
}

// Fuse.js configuration for fuzzy search
const fuse = new Fuse(faqs, {
  keys: ['question', 'answer'],  // Searching both question and answer
  includeScore: true,
  threshold: 0.3,  // Adjust threshold for better matching
});

// Middleware to parse JSON
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
  const results = fuse.search(query).slice(0, 5).map(result => result.item.question); // Use slice to limit results
  res.json(results);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
