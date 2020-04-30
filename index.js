const express = require('express');
const app =express();
const fs = require('fs');



//port is the number we want to listen
//folder is a directory
//server host a static file in 4000 port
app.listen(4000, ()=>{
    console.log('listening at 4000');
})

app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

//when user enter url(route) on browser, he makes Get request to the server
//that request is inside the followering argument
//he user will see the response being send back
//search is the route
//flower is the var

let data = fs.readFileSync('words.json');
let words = JSON.parse(data);

//following get works like POST
app.get('/add/:phrase/:score',(request,response)=>{
    let phrase = request.params.phrase;
    let score = request.params.score;
    words[phrase] = Number(score);
    response.send(words);

});

app.get('/all',(request,response)=>{
   
    response.send(words);

});

app.get('/search/:phrase',(request,response)=>{
 
    //send back json file to client
    response.json({
        "status":'success',
        "phrase": request.params.phrase,
        "score": words[request.params.phrase]});

});

//POST is used for upload large data
//Or for security
app.post('/api',(request,response)=>{
    console.log('client want to post data from this endpoint ');
    console.log(request.body);

    //save the data
    console.log('saving files');
    fs.writeFile('helloworld.json', JSON.stringify(request.body), function (err) {
        if (err) return console.log(err);
        console.log('saved data');
    });

});



//create own npm
//public is a folder dir, is accessble by 
// var lion =require('lion-lib-00000');
// const re = lion.add(1,2);
// console.log(re);