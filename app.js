const express = require('express');
const app = express();
const port = 3007



app.listen(port, (req,res) => {

    console.log( `server is listening on port ${port}`)

    // res.send('hey')
})