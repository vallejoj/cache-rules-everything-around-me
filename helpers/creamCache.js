const redis = require("redis"),
    client = redis.createClient();


client.on("error", function (err) {
    console.log("Error " + err);
});

client.on('connect', ()=>{
  console.log('connected to redis server!');
})

client.set('food', 'sushi', redis.print);
client.get('food', (err,reply)=>{
  console.log(reply)
});
