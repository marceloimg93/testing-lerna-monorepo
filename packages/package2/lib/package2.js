const express = require('express')

const app = express();
const PORT = process.env.PORT || 3001

app.use('/', (req, res) => res.send('Hello World Package 2!!!'))

app.listen(PORT, () => console.log('Package 2 Started'))