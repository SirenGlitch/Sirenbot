//if not working type "kill 1" in shell
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
  if(message.content === "ping"){
    message.channel.send("pong") 
  }
  if(message.content === "Wagwan!"){
    message.channel.send("ey what you sayin")
  }
  if(message.content === "Wagwan"){
    message.channel.send("ey what you sayin")
  }
  if(message.content === "yes yes"){
    message.channel.send("very good very niicce")
  }
  if(message.content === "Ping"){
    message.channel.send("Pong")
  }
  if(message.content === "Rick roll"){
    message.channel.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  }
  if(message.content === "Fortnite battle pass"){
    message.channel.send("sommat just fell out my arse")
  }
})

client.login(process.env.token)