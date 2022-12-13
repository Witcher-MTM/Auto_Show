const express = require('express');
const app = express();

app.get('/',function(res,req){
    console.log("On server!");
})


app.listen(3001,function(){
    console.log("Server starts on 3001 PORT");
})