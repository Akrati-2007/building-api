const express = require('express') ; //import express, added () to initialise it
const app = express();
const PORT= 8080 ;

app.use(express.json()) //using middleware

app.get('/tshirt', (req, res) => {
    res.status(200).send( {
        tshirt : '👕',
        size : 'small'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        return res.status(400).send({ message: 'We need a logo!'});
    }

    return res.status(200).send({
        tshirt: `👕 with your ${logo} and ID of ${id}`
    });
});

app.listen(  //fire it up
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)

