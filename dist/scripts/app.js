const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.send('<h2>Homepage</h2>')
});

app.listen(5001, () => {
    console.log('Server started at port 5001')
});