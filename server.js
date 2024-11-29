const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const entryRouter = require('./routes/entry');
// const router = express.Router();
// const Entry = require('./models/entries');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
 app.use('/entry', entryRouter);

mongoose.connect('mongodb+srv://nilofera1109:nilofer123@teatracker.v7l3l.mongodb.net/?retryWrites=true&w=majority&appName=teaTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});