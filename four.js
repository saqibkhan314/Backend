// HTML CAN'T DO CALCULATION HOW IT WILL BE WRITTEN IT WILL BE PRINTED LIKE THAT ONLY SO WE USE 'ejs' SO THAT WE CAN DO CALUCATION IF WE WANT 

// what ever code is written in ejs is not the html rather it is converted into html


//ejs SETUP
//1. npm i ejs

//2. configure ejs 
//app.set("view engine" , "ejs"); //write this part of code above the route 

//3.create "views" folder 

//4. then create a file inside views folder

//5. inplace of 'send' do it 'render' => yhen inside the render write ejs file name only

const express=require('express')
const app=express()

app.set("view engine" , "ejs");
app.use(express.static("./public")) // (express.static("./public") => means all static files plz search in public folder
 
app.get('/', function (req, res) { 
  res.render('index',{age:20}) // render will accept first file name of ejs and 2nd 
})   //data => it tells in which ever place age is written inside '<%= age %>' in the index file at that place 20 will appear                  


app.get('/profile/:username', function (req, res) {
  res.send(`Hello from ${req.params.username}`);
})
app.listen(4000)



app.use(function(req,res,next){
  console.log("hello from middleware");
  next();
}); 

