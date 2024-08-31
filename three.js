//express is framework(bani nanie things exist) for node.js

//express is used for routing

//SERVER IS FOR HANDLING REQUEST, RESPONSE ,DATA BUT IT NEEDS A SOFTWARE EXPRESS CODE SO THAT SERVER CAN DO IT'S TASK. SERVER CAN PERFORM IT'S TASK WITHOUT USING EXPRESS CODE BY USING HTTP PACKAGE.BUT EXPRESS USES HTTP CODE ONLY AND IT IS CONVERTED INTO HTTP CODE


//router

// https://www.abc.com => base url
//https://www.abc.com/profile/kscmkmkske35467m

// route is => what written in  base url except that the word which are connected to / is called route.Ex:- profile is not route...but /profile is route. Similarly this one also/kscmkmkske35467m 

//reason to make it
//we want the user to in:
 // /profile => user should see profile
 // /comment =>  "     "     "    comment
 // /likes =>  "     "     "       likes


 //Types of main routes 
 // 1.get routes
 // 2. post "

 //another types
 // 3. put "
 // 4. patch "
 // 5. delete "


 //GET ROUTE

//IF WE SEARCH ANYTHING IN A BROWSER THEN WHAT WE HAVE TYPED THAT WILL APPEAR IN THE URL AT TOP THEN THAT IS GET ROUTE. BUT THIS CAN CREATE PROBLEM WHILE GIVING PASSWORD OR SOMETHING CONFIDENTIAL AS ANYONE CA SEE

//POST ROUTE

//IF WE DON'T WANT TO SHOW WHAT WE HAVE TYPED THEN WE CAN USE POST ROUTE

/************************************************************************************************************************************* */




const express = require('express') //imports the Express library into my project
const app = express() // The app variable now represents your web application, which you can use to set up routes and handle requests.
//console.log(app);

//app.set("view engine" , "ejs");

app.get('/', function (req, res) {  //here we are creating / route means when we go in any 
  res.send('hello world')  //website we actually goes in it's / route of that           
})                        //webpage. ex: https://www.facebook.com/ => in / route

//app.get('/', function (req, res, next) => here also next can be used

app.get('/profile/:username', function (req, res) {
  res.send(`Hello from ${req.params.username}`);
})
app.listen(3000)
//get('/',function)
//req => request => IT CARRIES USER'S DATA TO SERVER
//res => response => IF SERVER WNTS TO RESPOND IN USER'S DATA THEN IT WILL USE RES
//send() => we are sending response to server

//app.get('/', function (req, res) => This line defines a route for the HTTP GET request at the root URL ('/'). When someone visits your website's main page, this function is called.


//app.listen(3000) => This line starts my server and tells it to listen for requests on port 3000

/*************************************************************8************************* */


//MIDDLEWARE

//middleware ek aisa function h jo kisi v route se phele chlta h , jiska mtlb apka har route chlne se phele agar koi kaam krna chate h to woh miidleware ka use kr skte h

//=> anything u can print 
//=> u can apply counter to count how many times that route has been opened (here /profile)

//NOTE: SUPPOSE WE HAVE OPENED A /PROFILE IT WILL BE RUNNING BUT BEFORE THIS ALSO MIDDLEWARE WILL RUN

app.use(function(req,res,next){
  console.log("hello from middleware");
  next();
}); 


/***************************************************************************************** */

//DYNAMIC ROUTING:

//Ex: www.facebook.com/profile/saqib
// www.facebook.com/profile/shubham
// www.facebook.com/profile/irshad
// www.facebook.com/profile/rajbir

//WE ARE GOING TO MAKE A ROUTE FOR EVERY PERSON SON WE CAN USE DYNAMIC ROUTING

//AISA KOI V ROUTE JISKA HISSA BAAR BAAR SAME RHTA H AUR KUCH HISSA BAAR BAAR CHANGE HOTA H THEN WE CAN CREATE DYNAMIC ROUTE CHANGING PART

// app.get('/profile/:username', function (req, res) {  // we are creating a variable by using ':' it is only dynamic routing







