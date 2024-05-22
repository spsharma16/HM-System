const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const appointementRoutes = require('./routes/appointment');
const dashboardRoutes = require('./routes/dashboard');

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URI,{
   
  
}).then(()=> console.log('MongoDB connected'))
  .catch(err=> console.log('MongoDB connection error',err));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api',appointementRoutes);
app.use('/api/dashboard', dashboardRoutes);

  app.listen(port,()=>{
    console.log(`Server is running on port :${port}`);

  });
