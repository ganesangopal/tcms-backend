(function() {
  const express = require('express');
  const app = express();
  const cors = require('cors');
  const port = 5000;
  app.use(cors({
    origin: ['http://localhost:5173']
  }))
  require('./src/config/routes')(app);
  app.get('/', (req, res) => {
    res.send('Hello world');
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}());