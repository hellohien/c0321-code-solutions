const express = require('express');
const path = require('path');
const app = express();
const root = path.join(__dirname, 'public');

app.use(express.static(root));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
