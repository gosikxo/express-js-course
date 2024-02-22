const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Hello World')
    res.status(200).send('Hi World');
}
);

app.listen(3000);