const express = require('express')
var route = require('./routes/route')
const app = express()
const bodyparser = require('body-parser');

const port = process.env.PORT || 3000;

app.use('/Api/Employee', route)
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))