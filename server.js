require('dotenv').config()
// require('dotenv').config({ path: path.resolve(__dirname, '.env.local') })
const express = require('express');
const app = express();

const cors = require('cors')
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks')

const port = 3000;
const uri = process.env.MONGODB_URI; 


mongoose.connect(uri).then(()=>{
  console.log('Connected to MongoDB');
}).catch((error)=>{
  console.log('Error connecting to MongoDB:', error);
})

app.use(cors());
app.use(express.json());
app.use('/tasks',taskRoutes);

app.get("/", (req, res) => res.send("Express on Vercel"));

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

module.exports = app;