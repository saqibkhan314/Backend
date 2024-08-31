let ans=require('./two')  //require() => it is funct. it is the way to import. then write inside './filename' and in any variable
let a=36
let b=56

console.log(ans);


// what is nodejs

//nojs code likha gya h c++ ka code jo ki liya gya h chrome browser ke v8 engine ke code se....aur is c++ code jisko liya gya h usey wrap kr diya gya h js code se and yeh humei allow krta h ki hm js code likhein aur ye js code accept karega and c++ ke basis par apko ek server env bna dega par sirf tb tk jb tk code chlega  jab tk apka node (v8 and js wrapper) on h  


//js server nhi bna skta h

//what is npm(Node Package Manager)

//npm ek aysi jagh h jahn pe bht sare packages milte h. ya phir bani banie features milti h
//packages => many code files


// var oneLinerJoke = require('one-liner-joke');//pasted from npm website

// console.log(oneLinerJoke.getRandomJoke());


var figlet = require("figlet");

figlet("Saqib Khan", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});