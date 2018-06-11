'use strict'

//#region Подключение модулей:
const express = require('express');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//endregion

//#region SocketIO:
var http = require('http').Server(app);
var io = require('socket.io')(http);

var messages = [];//массив сообщений

io.on('connection', function(socket){

  socket.emit('allMass',messages);

  socket.on('message',function(data){
    messages.push(data);
    io.emit('new message',data);
  })

  socket.on('disconnect', function(){
    console.log('connection close');
  });
});

//слушаем запросы к серверу на порт 3000:
http.listen(3000, function(){
  console.log('listening on *:3000');
});
//#endregion