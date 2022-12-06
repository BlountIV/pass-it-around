const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`99 bottless of vodka on the wall + <a href= "/98">Take one down, pass it around</a>`);
});

app.get("/:number_of_bottles", (req, res) => {
    if(req.params.number_of_bottles <= 0){
        res.send(`You have ${req.params.number_of_bottles} bottles left`, `<a href= "/"> Start Over</a>`)
    }else{
        res.send(`${req.params.number_of_bottles} bottles of vodka on the wall`, `<a href= "/${Number(req.params.number_of_bottles) - 1}"> take on down, pass it around </a>`)
    }
})


app.listen(port, function () {
    console.log('Listening on port 3000');
});