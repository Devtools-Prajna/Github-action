const express = require('express');
const path = require('path');
const { metersToFeet, feetToMeters } = require('./converter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { result: null, error: null });
});

app.post('/convert', (req, res) => {
  const { value, unit } = req.body;
  const num = parseFloat(value);
  if (isNaN(num)) {
    return res.render('index', { result: null, error: 'Please enter a valid number' });
  }
  
  let result;
  if (unit === 'meters') {
    result = `${num} meters = ${metersToFeet(num).toFixed(3)} feet`;
  } else if (unit === 'feet') {
    result = `${num} feet = ${feetToMeters(num).toFixed(3)} meters`;
  } else {
    return res.render('index', { result: null, error: 'Invalid unit selected' });
  }

  res.render('index', { result, error: null });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
