const express = require('express');
const app = express();
const port =  process.env.PORT || 3000;

const cars = [
    {
        'brand': 'Tata',
        'modal': 'Naxon',
        'make': '2018'
    },
    {
        'brand': 'Tata',
        'modal': 'Punch',
        'make': '2022'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/car', (req, res) => {
    res.json({car:cars});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

module.exports = app; // for testing