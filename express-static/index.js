const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

const root = path.join(__dirname, 'public');
console.log(root);
