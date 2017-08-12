const express = require('express');
const app = express();
const redis = require("redis"),
    client = redis.createClient();

const handlebars = require('express-handlebars');

    app.engine('.hbs', handlebars({extname: '.hbs', defaultLayout: 'main'}));
    app.set('view engine', '.hbs');

client.on("error", function (err) {
    console.log("Error " + err);
});

client.on('connect', ()=>{
  console.log(' connected to redis server!');
})
function renderHTMLString ( ) {
  app.render('api/index', function(err,html){

  })
}
// client.set('food', 'sushi', redis.print);
// client.get('food', (err,reply)=>{
//   console.log(reply)
//
// });



function creamCache (req,res,next){
client.get(req.path, (err, reply)=>{
  if(reply=== null){
    app.render('api/index.hbs', function(err,html){
      client.set(req.path, html , redis.print)
      next()
    })

  }else{
   res.send(reply)
  }
})
}

module.exports = creamCache;
