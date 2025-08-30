const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Handle the form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submitted:', { name, email, message });
  res.send('<h2>Thank you! Your message has been received.</h2>');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
