const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors')
require('./models/index');

const noteRoutes = require('./routes/noteRoutes');

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/notes', noteRoutes);

const port = 3030;
app.listen(port, async() =>{
    console.log(`http://localhost:${port}`);
    await sequelize.sync({alter: true});
})