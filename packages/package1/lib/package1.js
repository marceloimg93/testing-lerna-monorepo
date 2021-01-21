const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000

app.use('/', (req,res) => res.send('Hello World Package1'))

app.listen(PORT, () => console.log('Package 1 Started'))