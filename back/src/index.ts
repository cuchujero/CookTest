import { createServer } from './server';
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;

createServer().listen(PORT, () => {
  console.log(
    `Server is running on localhost:${PORT}, graphql ui endpoint: http://localhost:3000/graphql`
  );
});
